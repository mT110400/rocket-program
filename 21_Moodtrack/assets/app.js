"use strict";

class Habit {
  constructor(name, icon, done = false) {
    this.name = name;
    this.icon = icon;
    this.done = done;
  }

  toggle() {
    this.done = !this.done;
  }

  clone() {
    return new Habit(this.name, this.icon, false);
  }
}

class DailyRecord {
  constructor(date, mood, habits, obs = "") {
    this.date = date;
    this.mood = mood;
    this.habits = habits;
    this.obs = obs;
  }

  completedCount() {
    return this.habits.filter((h) => h.done).length;
  }
}

class RecordStorage {
  constructor(key = "moodtrack_records") {
    this.key = key;
  }

  load() {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  save(records) {
    localStorage.setItem(this.key, JSON.stringify(records));
  }
}

angular
  .module("moodTrackApp", [])

  .controller("MoodTrackCtrl", [
    "$scope",
    "$timeout",
    function ($scope, $timeout) {
      const storage = new RecordStorage();

      $scope.tab = "register";
      $scope.toast = false;

      $scope.moodLevels = [
        { value: 1, emoji: "😢", label: "Muito triste", color: "#F09595" },
        { value: 2, emoji: "😐", label: "Neutro", color: "#FAC775" },
        { value: 3, emoji: "😊", label: "Feliz", color: "#97C459" },
        { value: 4, emoji: "😄", label: "Muito feliz", color: "#7F77DD" },
      ];

      const defaultHabits = [
        new Habit("Beber água", "💧"),
        new Habit("Exercício", "🏃"),
        new Habit("Estudo", "📚"),
        new Habit("Leitura", "📖"),
        new Habit("Dormir cedo", "🌙"),
      ];

      function cloneDefaultHabits() {
        return defaultHabits.map((h) => h.clone());
      }

      function todayString() {
        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${dd}/${mm}/${yyyy}`;
      }

      function buildEmptyForm() {
        return {
          date: todayString(),
          mood: null,
          obs: "",
          habits: cloneDefaultHabits(),
        };
      }

      $scope.form = buildEmptyForm();
      $scope.newHabitName = "";

      $scope.filter = { date: "", mood: "" };

      $scope.records = storage.load();

      $scope.addCustomHabit = function () {
        const name = ($scope.newHabitName || "").trim();
        if (!name) return;

        const habit = new Habit(name, "⭐");
        defaultHabits.push(habit);
        $scope.form.habits.push(habit.clone());
        $scope.newHabitName = "";
      };

      $scope.saveRecord = function () {
        if (!$scope.form.mood) {
          alert("Selecione um nível de humor antes de salvar!");
          return;
        }
        if (!$scope.form.date) {
          alert("Informe a data do registro!");
          return;
        }

        const record = new DailyRecord(
          $scope.form.date,
          parseInt($scope.form.mood),
          $scope.form.habits.map((h) => ({
            name: h.name,
            icon: h.icon,
            done: h.done,
          })),
          $scope.form.obs,
        );

        $scope.records.push(record);
        storage.save($scope.records);

        $scope.toast = true;
        $timeout(() => {
          $scope.toast = false;
        }, 2500);

        $scope.resetForm();
        $scope.tab = "records";
      };

      $scope.resetForm = function () {
        $scope.form = buildEmptyForm();
      };

      $scope.deleteRecord = function (record) {
        const idx = $scope.records.indexOf(record);
        if (idx > -1) {
          $scope.records.splice(idx, 1);
          storage.save($scope.records);
        }
      };

      $scope.filteredRecords = function () {
        return $scope.records.filter((r) => {
          if ($scope.filter.date && r.date !== $scope.filter.date) return false;
          if ($scope.filter.mood && r.mood !== parseInt($scope.filter.mood))
            return false;
          return true;
        });
      };

      $scope.clearFilters = function () {
        $scope.filter = { date: "", mood: "" };
      };

      $scope.getMoodEmoji = function (value) {
        const m = $scope.moodLevels.find((x) => x.value === value);
        return m ? m.emoji : "—";
      };

      $scope.getMoodLabel = function (value) {
        const m = $scope.moodLevels.find((x) => x.value === value);
        return m ? m.label : "—";
      };

      $scope.moodCount = function (value) {
        return $scope.records.filter((r) => r.mood === value).length;
      };

      $scope.moodPercent = function (value) {
        if (!$scope.records.length) return 0;
        return Math.round(
          ($scope.moodCount(value) / $scope.records.length) * 100,
        );
      };

      $scope.avgMood = function () {
        if (!$scope.records.length) return "—";
        const sum = $scope.records.reduce((acc, r) => acc + r.mood, 0);
        return (sum / $scope.records.length).toFixed(1);
      };

      $scope.bestMood = function () {
        if (!$scope.records.length) return null;
        const counts = {};
        $scope.records.forEach((r) => {
          counts[r.mood] = (counts[r.mood] || 0) + 1;
        });
        return parseInt(
          Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b)),
        );
      };

      $scope.topHabit = function () {
        const map = {};
        $scope.records.forEach((r) => {
          (r.habits || []).forEach((h) => {
            if (h.done) {
              if (!map[h.name])
                map[h.name] = { name: h.name, icon: h.icon, count: 0 };
              map[h.name].count++;
            }
          });
        });
        const values = Object.values(map);
        if (!values.length) return {};
        return values.reduce(
          (best, h) => (h.count > best.count ? h : best),
          values[0],
        );
      };

      $scope.habitStats = function () {
        const map = {};
        $scope.records.forEach((r) => {
          (r.habits || []).forEach((h) => {
            if (!map[h.name])
              map[h.name] = { name: h.name, icon: h.icon, done: 0, total: 0 };
            map[h.name].total++;
            if (h.done) map[h.name].done++;
          });
        });
        return Object.values(map)
          .map((h) => ({
            name: h.name,
            icon: h.icon,
            pct: Math.round((h.done / h.total) * 100),
          }))
          .sort((a, b) => b.pct - a.pct);
      };
    },
  ]);
