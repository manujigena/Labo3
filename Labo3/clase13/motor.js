var Motor = (function () {
    function Motor(potencia, tipo) {
        this.pontencia = potencia;
        this.tipo = tipo;
    }
    Motor.prototype.Encender = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    Motor.prototype.Apagar = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    Motor.prototype.callback = function (estado, tipo) {
    };
    return Motor;
}());
