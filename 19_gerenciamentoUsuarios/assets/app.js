angular
  .module("escolaApp", [])

  .service("UsuarioService", [
    "$q",
    function ($q) {
      var usuarios = [
        {
          nome: "Ana Souza",
          email: "ana@escola.com",
          tipo: "Aluno",
          dataCadastro: new Date(2024, 1, 10),
        },
        {
          nome: "Carlos Mendes",
          email: "carlos@escola.com",
          tipo: "Aluno",
          dataCadastro: new Date(2024, 3, 22),
        },
        {
          nome: "Fernanda Lima",
          email: "fernanda@escola.com",
          tipo: "Aluno",
          dataCadastro: new Date(2024, 5, 5),
        },
        {
          nome: "Rafael Oliveira",
          email: "rafael@escola.com",
          tipo: "Aluno",
          dataCadastro: new Date(2024, 7, 14),
        },
        {
          nome: "Beatriz Costa",
          email: "beatriz@escola.com",
          tipo: "Aluno",
          dataCadastro: new Date(2025, 0, 8),
        },
        {
          nome: "Joana Lima",
          email: "joana@escola.com",
          tipo: "Professor",
          dataCadastro: new Date(2023, 8, 1),
        },
        {
          nome: "Marcos Reis",
          email: "marcos@escola.com",
          tipo: "Professor",
          dataCadastro: new Date(2023, 10, 17),
        },
        {
          nome: "Patrícia Nunes",
          email: "patricia@escola.com",
          tipo: "Professor",
          dataCadastro: new Date(2024, 2, 30),
        },
      ];

      this.listar = function () {
        return usuarios;
      };

      this.salvar = function (usuario) {
        var deferred = $q.defer();
        setTimeout(function () {
          usuarios.push({
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.tipo,
            dataCadastro: new Date(),
          });
          deferred.resolve();
        }, 1800);
        return deferred.promise;
      };

      this.removerObjeto = function (usuario) {
        var idx = usuarios.indexOf(usuario);
        if (idx !== -1) usuarios.splice(idx, 1);
      };
    },
  ])

  .controller("AppController", [
    "$scope",
    "UsuarioService",
    function ($scope, UsuarioService) {
      $scope.usuarios = UsuarioService.listar();
    },
  ])

  .controller("FormController", [
    "$scope",
    "UsuarioService",
    function ($scope, UsuarioService) {
      $scope.salvando = false;
      $scope.sucesso = false;
      $scope.novoUsuario = { nome: "", email: "", tipo: "" };

      $scope.salvar = function (form) {
        if (form.$invalid) {
          angular.forEach(form, function (field) {
            if (field && field.$setTouched) field.$setTouched();
          });
          return;
        }

        $scope.salvando = true;
        $scope.sucesso = false;

        UsuarioService.salvar($scope.novoUsuario).then(function () {
          $scope.$apply(function () {
            $scope.salvando = false;
            $scope.sucesso = true;
            $scope.novoUsuario = { nome: "", email: "", tipo: "" };
            form.$setPristine();
            form.$setUntouched();
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.sucesso = false;
              });
            }, 3000);
          });
        });
      };
    },
  ])

  .controller("ListaController", [
    "$scope",
    "UsuarioService",
    function ($scope, UsuarioService) {
      $scope.filtro = "";
      $scope.filtroTipo = "";

      $scope.remover = function ($index) {
        var lista = $scope.usuarios.filter(function (u) {
          var matchFiltro =
            !$scope.filtro ||
            u.nome.toLowerCase().indexOf($scope.filtro.toLowerCase()) !== -1;
          var matchTipo = !$scope.filtroTipo || u.tipo === $scope.filtroTipo;
          return matchFiltro && matchTipo;
        });
        var usuario = lista[$index];
        if (usuario) UsuarioService.removerObjeto(usuario);
      };
    },
  ]);
