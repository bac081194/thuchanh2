(function () {
  "use strict"; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var e = this || self;
  function f(c, b) {
    c = c.split(".");
    var a = e;
    c[0] in a ||
      "undefined" == typeof a.execScript ||
      a.execScript("var " + c[0]);
    for (var d; c.length && (d = c.shift()); )
      c.length || void 0 === b
        ? a[d] && a[d] !== Object.prototype[d]
          ? (a = a[d])
          : (a = a[d] = {})
        : (a[d] = b);
  }
  var g = {
    YEAR_FULL: "y",
    YEAR_FULL_WITH_ERA: "y G",
    YEAR_MONTH_ABBR: "MMM y",
    YEAR_MONTH_FULL: "MMMM y",
    YEAR_MONTH_SHORT: "MM/y",
    MONTH_DAY_ABBR: "MMM d",
    MONTH_DAY_FULL: "MMMM dd",
    MONTH_DAY_SHORT: "M/d",
    MONTH_DAY_MEDIUM: "MMMM d",
    MONTH_DAY_YEAR_MEDIUM: "MMM d, y",
    WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d",
    WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y",
    DAY_ABBR: "d",
    MONTH_DAY_TIME_ZONE_SHORT: "MMM d, h:mm\u202fa zzzz",
  };
  g = {
    YEAR_FULL: "y",
    YEAR_FULL_WITH_ERA: "y G",
    YEAR_MONTH_ABBR: "MMM y",
    YEAR_MONTH_FULL: "MMMM 'n\u0103m' y",
    YEAR_MONTH_SHORT: "'th\u00e1ng' MM, y",
    MONTH_DAY_ABBR: "d MMM",
    MONTH_DAY_FULL: "dd MMMM",
    MONTH_DAY_SHORT: "d/M",
    MONTH_DAY_MEDIUM: "d MMMM",
    MONTH_DAY_YEAR_MEDIUM: "d MMM, y",
    WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM",
    WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y",
    DAY_ABBR: "d",
    MONTH_DAY_TIME_ZONE_SHORT: "HH:mm zzzz d MMM",
  };
  var h = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS:
      "January February March April May June July August September October November December".split(
        " "
      ),
    STANDALONEMONTHS:
      "January February March April May June July August September October November December".split(
        " "
      ),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS:
      "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
      " "
    ),
    STANDALONEWEEKDAYS:
      "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: [
      "h:mm:ss\u202fa zzzz",
      "h:mm:ss\u202fa z",
      "h:mm:ss\u202fa",
      "h:mm\u202fa",
    ],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5,
  };
  h = {
    ERAS: ["TCN", "SCN"],
    ERANAMES: [
      "Tr\u01b0\u1edbc Ch\u00faa Gi\u00e1ng Sinh",
      "Sau C\u00f4ng Nguy\u00ean",
    ],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS:
      "th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(
        ";"
      ),
    STANDALONEMONTHS:
      "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(
        ";"
      ),
    SHORTMONTHS:
      "thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(
        ";"
      ),
    STANDALONESHORTMONTHS:
      "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(
        ";"
      ),
    WEEKDAYS:
      "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(
        ";"
      ),
    STANDALONEWEEKDAYS:
      "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(
        ";"
      ),
    SHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    STANDALONESHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    NARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    STANDALONENARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Qu\u00fd 1", "Qu\u00fd 2", "Qu\u00fd 3", "Qu\u00fd 4"],
    AMPMS: ["SA", "CH"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: [
      "'l\u00fac' {0} {1}",
      "'l\u00fac' {0} {1}",
      "{0} {1}",
      "{0} {1}",
    ],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6,
  };
  function k(c, b) {
    if (void 0 === b) {
      b = c + "";
      var a = b.indexOf(".");
      b = Math.min(-1 === a ? 0 : b.length - a - 1, 3);
    }
    a = Math.pow(10, b);
    b = { g: b, f: ((c * a) | 0) % a };
    return 1 == (c | 0) && 0 == b.g ? "one" : "other";
  }
  k = function () {
    return "other";
  };
  f("YT_I18N_FORMATTING_GOOG_LOCALE", "vi");
  f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS", g);
  f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS", h);
  f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS", {
    DAY: {
      LONG: {
        R: {
          "-1": "H\u00f4m qua",
          "-2": "H\u00f4m kia",
          0: "H\u00f4m nay",
          1: "Ng\u00e0y mai",
          2: "Ng\u00e0y kia",
        },
        P: "other{# ng\u00e0y tr\u01b0\u1edbc}",
        F: "other{sau # ng\u00e0y n\u1eefa}",
      },
      SHORT: {
        R: { "-1": "h\u00f4m qua", 0: "h\u00f4m nay", 1: "ng\u00e0y mai" },
        P: "other{# ng\u00e0y tr\u01b0\u1edbc}",
        F: "other{sau # ng\u00e0y n\u1eefa}",
      },
    },
    HOUR: {
      LONG: {
        R: { 0: "gi\u1edd n\u00e0y" },
        P: "other{# gi\u1edd tr\u01b0\u1edbc}",
        F: "other{sau # gi\u1edd n\u1eefa}",
      },
    },
    MINUTE: {
      LONG: {
        R: { 0: "ph\u00fat n\u00e0y" },
        P: "other{# ph\u00fat tr\u01b0\u1edbc}",
        F: "other{sau # ph\u00fat n\u1eefa}",
      },
    },
    MONTH: {
      LONG: {
        R: {
          "-1": "th\u00e1ng tr\u01b0\u1edbc",
          0: "th\u00e1ng n\u00e0y",
          1: "th\u00e1ng sau",
        },
        P: "other{# th\u00e1ng tr\u01b0\u1edbc}",
        F: "other{sau # th\u00e1ng n\u1eefa}",
      },
    },
    QUARTER: {
      LONG: {
        R: {
          "-1": "qu\u00fd tr\u01b0\u1edbc",
          0: "qu\u00fd n\u00e0y",
          1: "qu\u00fd sau",
        },
        P: "other{# qu\u00fd tr\u01b0\u1edbc}",
        F: "other{sau # qu\u00fd n\u1eefa}",
      },
    },
    SECOND: {
      LONG: {
        R: { 0: "b\u00e2y gi\u1edd" },
        P: "other{# gi\u00e2y tr\u01b0\u1edbc}",
        F: "other{sau # gi\u00e2y n\u1eefa}",
      },
    },
    WEEK: {
      LONG: {
        R: {
          "-1": "tu\u1ea7n tr\u01b0\u1edbc",
          0: "tu\u1ea7n n\u00e0y",
          1: "tu\u1ea7n sau",
        },
        P: "other{# tu\u1ea7n tr\u01b0\u1edbc}",
        F: "other{sau # tu\u1ea7n n\u1eefa}",
      },
    },
    YEAR: {
      LONG: {
        R: {
          "-1": "n\u0103m ngo\u00e1i",
          0: "n\u0103m nay",
          1: "n\u0103m sau",
        },
        P: "other{# n\u0103m tr\u01b0\u1edbc}",
        F: "other{sau # n\u0103m n\u1eefa}",
      },
    },
  });
  f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT", k);
  f("YT_I18N_FORMATTING_DURATION_TIME_SYMBOLS", {
    DAY: {
      LONG: "other{# ng\u00e0y}",
      SHORT: "other{# ng\u00e0y}",
      NARROW: "other{# ng\u00e0y}",
    },
    HOUR: {
      LONG: "other{# gi\u1edd}",
      SHORT: "other{# gi\u1edd}",
      NARROW: "other{# gi\u1edd}",
    },
    MINUTE: {
      LONG: "other{# ph\u00fat}",
      SHORT: "other{# ph\u00fat}",
      NARROW: "other{# ph\u00fat}",
    },
    MONTH: {
      LONG: "other{# th\u00e1ng}",
      SHORT: "other{# th\u00e1ng}",
      NARROW: "other{# th\u00e1ng}",
    },
    SECOND: {
      LONG: "other{# gi\u00e2y}",
      SHORT: "other{# gi\u00e2y}",
      NARROW: "other{# gi\u00e2y}",
    },
    WEEK: {
      LONG: "other{# tu\u1ea7n}",
      SHORT: "other{# tu\u1ea7n}",
      NARROW: "other{# tu\u1ea7n}",
    },
    YEAR: {
      LONG: "other{# n\u0103m}",
      SHORT: "other{# n\u0103m}",
      NARROW: "other{# n\u0103m}",
    },
  });
}.call(this));
