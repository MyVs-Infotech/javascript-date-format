Date.prototype.toMyFormat || ! function() { Date.prototype.toMyVsFormat = function(t) { var y = this.getDate(),
            e = this.getMonth() + 1,
            r = this.getFullYear(),
            a = this.getHours(),
            o = this.getMinutes();
        y = 1 == y.toString().length ? "0" + y.toString() : y.toString(), e = 1 == e.toString().length ? "0" + e.toString() : e.toString(), a = 1 == a.toString().length ? "0" + a.toString() : a.toString(), o = 1 == o.toString().length ? "0" + o.toString() : o.toString(); var m = ""; switch (t.toString().toLowerCase()) {
            case "dd-mm-yyyy":
                m = y + "-" + e + "-" + r; break;
            case "mm-dd-yyyy":
                m = e + "-" + y + "-" + r; break;
            case "yyyy-mm-dd":
                m = r + "-" + e + "-" + y; break;
            case "yyyy-dd-mm":
                m = r + "-" + y + "-" + e; break;
            case "dd-mm-yyyy hh:mm":
                m = y + "-" + e + "-" + r + " " + a + ":" + o; break;
            case "dd/mm/yyyy":
                m = y + "/" + e + "/" + r; break;
            case "mm/dd/yyyy":
                m = e + "/" + y + "/" + r; break;
            case "yyyy/mm/dd":
                m = r + "/" + e + "/" + y; break;
            case "yyyy/dd/mm":
                m = r + "/" + y + "/" + e; break;
            case "dd/mm/yyyy hh:mm":
                m = y + "/" + e + "/" + r + " " + a + ":" + o } return m } }();