(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "+s0g": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "//9w": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "/X5v": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", ss: "%d s~écóñ~ds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "05HB": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row">\n\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">{{ graficos.grafico1.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico1.labels" [chartData]="graficos.grafico1.data" chartType="doughnut"></app-grafico-dona>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico2.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico2.labels" [chartData]="graficos.grafico2.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class="row">\n\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico3.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico3.labels" [chartData]="graficos.grafico3.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="col-6">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">{{ graficos.grafico4.leyenda }} </h4>\n\n                <app-grafico-dona [chartLabels]="graficos.grafico4.labels" [chartData]="graficos.grafico4.data" chartType="doughnut"></app-grafico-dona>\n\n            </div>\n        </div>\n    </div>\n\n</div>'
        },
        "0LZZ": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '\x3c!-- <button class="btn btn-danger" (click)="salir()">   \n  Salir\n</button>\n<hr> --\x3e\n<div class="row">\n    <div class="col-3">\n        <div class="card">\n            <div id="chat-usuarios" class="card-body">\n\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Foto</th>\n                            <th>usuario</th>\n                            <th>sala</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr *ngFor="let usuario of usuarios">\n                            <td class="w70">\n                                <img [src]="usuario.img | imagen:\'usuario\'" class="img-50 img-circle">\n                            </td>\n                            <td>\n                                {{usuario.nombre}}\n                            </td>\n                            <td>\n                                {{usuario.sala}}\n                            </td>\n\n                            \x3c!-- <td>   ACA LA IDEA ES SELECCIONAR USUARIOS PARA ESCRIBILES, TAMBIEN MEDICOS Y HOSPITALES\n                            <button [routerLink]="[\'/medico\', medico._id]" class="btn btn-primary">\n                            <i class="fa fa-edit"></i>\n                          </button>\n                            <button (click)="borrarMedico( medico )" class="btn btn-primary">\n                              <i class="fa fa-trash-o"></i>\n                            </button>\n                            </td> --\x3e\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n\n        \x3c!-- <h1>\n            Nombre: {{nombre}} Sala: {{sala}}\n        </h1> --\x3e\n        <form #f="ngForm" (ngSubmit)="seleccionSala(f)">\n\n            <div class="form-group">\n                <select (change)="cambioSala( $event.target.value )" [(ngModel)]="sala" name="sala" class="form-control" required>\n                          <option value="">Selecione la sala</option>\n                          <option *ngFor="let sala of salas" [value]="sala">{{sala}}</option>\n                        </select>\n            </div>\n\n            <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">\n                      Guardar\n                    <i class="fa fa-save"></i>\n            </button>\n            \x3c!-- <a routerLink="/medicos" class="btn btn-inverse waves-effect waves-light">Cancelar</a> --\x3e\n        </form>\n    </div>\n\n\n    \x3c!-- <app-lista-usuarios></app-lista-usuarios> --\x3e\n\n\n    <div class="col-9">\n        <div class="card">\n            <div class="card-body">\n                <app-chat></app-chat>\n            </div>\n        </div>\n    </div>\n    \x3c!-- <div class="footerInput">\n        Super Chat - Ignacio Trezza\n    </div> --\x3e\n\n\n    <script>\n        var hexString = \'#\' + this.progreso.toString(16) + this.progreso1.toString(16) + \'ff\';\n        var slider = document.getElementById("myRange");\n        var output = document.getElementById("demo");\n        output.innerHTML = slider.value;\n\n        slider.oninput = function() {\n            output.innerHTML = this.value;\n            this.progreso = this.value;\n\n        }\n    <\/script>\n    \x3c!-- <script>\n    var slider = document.getElementById("myRange1");\n    var output = document.getElementById("demo1");\n    output.innerHTML = slider.value;\n\n    slider.oninput = function() {\n        output.innerHTML = this.value;\n        this.progreso1 = this.value;\n\n    }\n<\/script> --\x3e'
        },
        "0mo+": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
                    a = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };
                e.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"), monthsShortRegex: /^(ཟླ་\d{1,2})/, monthsParseExact: !0, weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", ss: "%d སྐར་ཆ།", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function(e) { return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e }, meridiem: function(e, t, a) { return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "0tRk": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("pt-br", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" })
            }(a("wd/R"))
        },
        "1Y4j": function(e, t, a) {
            "use strict";
            a.r(t), t.default = "<p>\n  promesas works!\n</p>\n"
        },
        "1ppg": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fil", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "1rYy": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("hy-am", {
                    months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") },
                    monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                    weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" },
                    calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function() { return "dddd [օրը ժամը] LT" }, lastWeek: function() { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" },
                    relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", ss: "%d վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" },
                    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                    isPM: function(e) { return /^(ցերեկվա|երեկոյան)$/.test(e) },
                    meridiem: function(e) { return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան" },
                    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-ին" : e + "-րդ";
                            default:
                                return e
                        }
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        "1xZ4": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(e, t) { var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"; return "w" !== t && "W" !== t || (a = "a"), e + a }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "2fjn": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr-ca", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" },
                    relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e")
                        }
                    }
                })
            }(a("wd/R"))
        },
        "2ykv": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "3/ER": function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("Ju5/"),
                    r = "object" == typeof exports && exports && !exports.nodeType && exports,
                    i = r && "object" == typeof e && e && !e.nodeType && e,
                    s = i && i.exports === r ? n.a.Buffer : void 0,
                    o = s ? s.allocUnsafe : void 0;
                t.a = function(e, t) {
                    if (t) return e.slice();
                    var a = e.length,
                        n = o ? o(a) : new e.constructor(a);
                    return e.copy(n), n
                }
            }).call(this, a("3UD+")(e))
        },
        "3E1r": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                    a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
                e.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", ss: "%d सेकंड", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "3UD+": function(e, t) {
            e.exports = function(e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), Object.defineProperty(t, "exports", { enumerable: !0 }), t.webpackPolyfill = 1
                }
                return t
            }
        },
        "3dHE": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="w3-container">\n    <div class="row animated fadeIn">\n        <div class="col-12">\n            <div class="card m-b-0">\n                \x3c!-- .chat-row --\x3e\n                <div class="chat-main-box">\n\n                    <div class="chat-right-aside">\n\n                        <div class="chat-rbox" width="850" height="800">\n                            <div *ngFor="let msg of mensajes">\n                                <ul class="chat-list p-20" id="divChatbox">\n\n                                    <div *ngIf=" msg.de === \'yo\' ; else elseBlock">\n                                        <li class="reverse">\n                                            <div class="chat-content">\n                                                <h5>{{msg.de}}</h5>\n                                                <div class="box bg-light-inverse">{{msg.cuerpo}}</div>\n                                                <div class="chat-img"><img [src]="msg.img | imagen:\'usuario\'" class="img-50 img-circle"></div>\n                                            </div>\n                                            \x3c!-- <div class="chat-time"> {{hora}} </div> --\x3e\n                                        </li>\n                                    </div>\n                                    <ng-template #elseBlock>\n                                        <li class="animated fadeIn">\n                                            \x3c!--   <div *ngIf="msg.de === \'Administrador\'; else elseBlock">\n                                                <div class="chat-img"><img src="assets/images/big/img2.jpg" alt="user" /></div>\n                                                <div class="chat-content">\n                                                    <h5> {{msg.de}} </h5>\n                                                    <div class="box bg-light-danger"> {{msg.cuerpo}} </div>\n                                                </div>\n                                            </div>\n                                            <ng-template #elseBlock> --\x3e\n                                            <div class="chat-img"><img [src]="msg.img | imagen:\'usuario\'" class="img-50 img-circle"></div>\n                                            <div class="chat-content">\n                                                <h5> {{msg.de}} </h5>\n                                                <div class="box bg-light-inverse"> {{msg.cuerpo}} </div>\n                                            </div>\n                                            \x3c!-- </ng-template> --\x3e\n                                            \x3c!-- <div class="chat-time"> {{hora}} </div> --\x3e\n                                        </li>\n                                    </ng-template>\n                                </ul>\n                            </div>\n                        </div>\n\n                    </div>\n                    \x3c!-- .chat-right-panel --\x3e\n                </div>\n\n                \x3c!-- /.chat-row --\x3e\n            </div>\n\n        </div>\n\n    </div>\n</div>\n<div class="footerInput">\n    <div class="card">\n        <div class="card-body-InputChat">\n            <form (ngSubmit)="enviar()">\n                <div class="row">\n                    <div class="col-9 text-right">\n                        <input type="text" [(ngModel)]="texto" autocomplete="off" name="texto" placeholder="Escribe tu mensaje aquí" class="form-control b-0" autofocus>\n                    </div>\n                    <div class="col-1 text-right">\n                        <button type="submit" class="btn btn-info btn-circle btn-lg"><i class="fa fa-paper-plane-o"></i> </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class="row">\n    <div class="col-8">\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">Sensor 1 = {{ progreso1 }} </h4>\n                <br>\n                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" [attr.ariaValuenow]="progreso1 - 600" aria-valuenow="50" aria-valuemin="0" aria-valuemax="600" [style.width]="progreso1 + \'%\'"></div>\n\n                <h4 class="card-title">Long Pulse 1 = {{ progreso1r }} </h4>\n                <br>\n                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" [attr.ariaValuenow]="progreso1r - 90" aria-valuenow="50" aria-valuemin="0" aria-valuemax="99" [style.width]="progreso1r + \'%\'"></div>\n\n\n                <label form="customRange1">Frecuencia</label>\n                <input #txtFrecuencia type="range" class="striped" min="45" max="150" value="frecuencia" step="1" name="frecuencia" [(ngModel)]="frecuencia" (ngModelChange)="onChanges($event)" id="customRange1">\n\n                <label form="customRange2">LongPulse</label>\n                <input #txtLongPulse type="range" class="striped" min="1" max="99" value="LongPulse" step="1" name="LongPulse" [(ngModel)]="LongPulse" (ngModelChange)="onChanges1($event)" id="customRange2">\n                <h4 class="card-title">Sensor 2 = {{ progreso2 }} </h4>\n                <br>\n                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" [attr.ariaValuenow]="progreso2 - 600" aria-valuenow="50" aria-valuemin="0" aria-valuemax="600" [style.width]="progreso2 + \'%\'"></div>\n                <h4 class="card-title">LongPulse 2 = {{ progreso2r }} </h4>\n                <br>\n                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" [attr.ariaValuenow]="progreso2r - 90" aria-valuenow="50" aria-valuemin="0" aria-valuemax="99" [style.width]="progreso2r + \'%\'"></div>\n                <br>\n                <label form="customRange3">marcha</label>\n                <input #txtDir type="range" class="striped" min="-90" max="90" value="dir" step="1" name="dir" [(ngModel)]="dir" (ngModelChange)="onChanges2($event)" id="customRange3">\n                <label form="customRange4">sentido</label>\n                <input #txtSen type="range" class="striped" min="-90" max="90" value="sen" step="1" name="sen" [(ngModel)]="sen" (ngModelChange)="onChanges3($event)" id="customRange4">\n\n            </div>\n        </div>\n    </div>\n</div>\n<canvas id="myCanvas" width="360" height="450" style="border:1px solid #d3d3d3;">\n</canvas>\n<script>\n    function deviceOrientationListener(event) {\n        var c = document.getElementById("myCanvas");\n        var ctx = c.getContext("2d");\n\n        ctx.clearRect(0, 0, c.width, c.height);\n        ctx.fillStyle = "#FF7777";\n        ctx.font = "14px Verdana";\n        ctx.fillText("Alpha: " + Math.Round(event.alpha), 10, 20);\n        ctx.beginPath();\n        ctx.moveTo(180, 75);\n        ctx.lineTo(210, 75);\n        ctx.arc(180, 75, 60, 0, event.alpha * Math.PI / 180);\n        ctx.fill();\n\n        ctx.fillStyle = "#FF6600";\n        ctx.fillText("Beta: " + Math.round(event.beta), 10, 140);\n        ctx.beginPath();\n        ctx.fillRect(180, 150, event.beta, 90);\n\n        ctx.fillStyle = "#FF0000";\n        ctx.fillText("Gamma: " + Math.round(event.gamma), 10, 270);\n        ctx.beginPath();\n        ctx.fillRect(90, 340, 180, event.gamma);\n    }\n\n    if (window.DeviceOrientationEvent) {\n        window.addEventListener("deviceorientation", deviceOrientationListener);\n    } else {\n        alert("Sorry, your browser doesn\'t support Device Orientation");\n    }\n<\/script>\n\x3c!-- <script>\n    var s$ = function(e) {\n        return document.getElementById(e);\n    };\n\n\n    if (window.DeviceMotionEvent) {\n        alert(\'devicemotion supported\');\n        window.addEventListener(\'devicemotion\', function(ev) {\n            var acc = ev.accelerationIncludingGravity;\n            dmHdlr(acc.x, acc.y, acc.z);\n        }, false);\n    } else {\n        alert("devicemotion not supported on your device or browser.");\n    }\n\n\n    var lastDM = new Date().getTime();\n\n    function dmHdlr(aX, aY, aZ) {\n        var currDM = new Date().getTime();\n        //if (currDM < lastDM + 1000) {return;}\n        lastDM = currDM;\n\n        s$(\'aX\').innerHTML = aX ? aX.toFixed(3) : \'?\';\n        s$(\'aY\').innerHTML = aY ? aY.toFixed(3) : \'?\';\n        s$(\'aZ\').innerHTML = aZ ? aZ.toFixed(3) : \'?\';\n    }\n<\/script> --\x3e\n\x3c!-- <h3>\n    {{ progreso1 }}\n</h3>\n\n<label form="customRange1">progreso1</label>\n<input #txtProgress1 type="range" class="striped" min="1" max="600" value="progreso" step="1" name="progreso1" [(ngModel)]="progreso1" id="customRange1">\n\n<h3>\n    {{ progreso2 }}\n</h3>\n\n<label form="customRange2">progreso2</label>\n<input #txtProgress2 type="range" class="striped" min="1" max="600" value="progreso" step="1" name="progreso2" [(ngModel)]="progreso2" id="customRange2"> --\x3e\n\x3c!-- <script src="../jquery.min.js"><\/script> --\x3e\n\n\n\n\n\x3c!-- <!doctype html>\n<html>\n  <head>\n    <title>Multi Mouse - How many mice can I mouse eater eat?</title> --\x3e\n\x3c!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"><\/script>    --\x3e\n\x3c!-- <script src="/json.js"><\/script> for ie --\x3e\n\x3c!-- <script src="socket.io/socket.io.js"><\/script> sockets --\x3e\n\x3c!-- </head>\n  <body>\n<h1> You can see my mouse!! ZOMG - <a href="http://www.youtube.com/watch?v=aFLcbBvTGns">Video explaining why I\'m doign this</a></h1>    \n \n   \n     \n    <div id="chat"><p>Connecting...</p></div>\n    <form id="form" onsubmit="send(); return false">\n      <input type="text" autocomplete="off" id="text"><input type="submit" value="Send">\n    </form>\n     \n    <style>\n      .dot { height: 10px; width: 10px; background-color:#000000;position:absolute;left:0;top:0;}\n    </style>\n     \n  </body>\n</html> --\x3e'
        },
        "3tpr": function(e, t, a) {
            "use strict";
            a.r(t), t.default = ""
        },
        "4MV3": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦" },
                    a = { "૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0" };
                e.defineLocale("gu", { months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), monthsParseExact: !0, weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), longDateFormat: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, calendar: { sameDay: "[આજ] LT", nextDay: "[કાલે] LT", nextWeek: "dddd, LT", lastDay: "[ગઇકાલે] LT", lastWeek: "[પાછલા] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", ss: "%d સેકંડ", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" }, preparse: function(e) { return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /રાત|બપોર|સવાર|સાંજ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "4P15": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row">\n    <div class="col-4">\n\n        <div class="card">\n            <div class="card-body">\n\n                <h4 class="card-title">Temas</h4>\n                <hr>\n\n                <div class="r-panel-body">\n                    <ul id="themecolors" class="m-t-20">\n                        <li><b>Con el sidebar claro</b></li>\n                        <li><a #link1 (click)="cambiarColor(\'default\', link1 )" data-theme="default" class="selector default-theme">1</a></li>\n                        <li><a #link2 (click)="cambiarColor(\'green\', link2 )" data-theme="green" class="selector green-theme">2</a></li>\n                        <li><a #link3 (click)="cambiarColor(\'red\', link3 )" data-theme="red" class="selector red-theme">3</a></li>\n                        <li><a #link4 (click)="cambiarColor(\'blue\', link4 )" data-theme="blue" class="selector blue-theme">4</a></li>\n                        <li><a #link5 (click)="cambiarColor(\'purple\', link5 )" data-theme="purple" class="selector purple-theme">5</a></li>\n                        <li><a #link6 (click)="cambiarColor(\'megna\', link6 )" data-theme="megna" class="selector megna-theme">6</a></li>\n\n                        <li class="d-block m-t-30"><b>Con el sidebar oscuro</b></li>\n                        <li><a #link7 (click)="cambiarColor(\'default-dark\', link7 )" data-theme="default-dark" class="selector default-dark-theme">7</a></li>\n                        <li><a #link8 (click)="cambiarColor(\'green-dark\', link8 )" data-theme="green-dark" class="selector green-dark-theme">8</a></li>\n                        <li><a #link9 (click)="cambiarColor(\'red-dark\', link9 )" data-theme="red-dark" class="selector red-dark-theme">9</a></li>\n                        <li><a #link10 (click)="cambiarColor(\'blue-dark\', link10 )" data-theme="blue-dark" class="selector blue-dark-theme">10</a></li>\n                        <li><a #link11 (click)="cambiarColor(\'purple-dark\', link11 )" data-theme="purple-dark" class="selector purple-dark-theme">11</a></li>\n                        <li><a #link12 (click)="cambiarColor(\'megna-dark\', link12 )" data-theme="megna-dark" class="selector megna-dark-theme">12</a></li>\n                    </ul>\n\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n</div>'
        },
        "4dOw": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "6+QB": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        "6B0Y": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០" },
                    a = { "១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0" };
                e.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /ព្រឹក|ល្ងាច/, isPM: function(e) { return "ល្ងាច" === e }, meridiem: function(e, t, a) { return e < 12 ? "ព្រឹក" : "ល្ងាច" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", ss: "%d វិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, dayOfMonthOrdinalParse: /ទី\d{1,2}/, ordinal: "ទី%d", preparse: function(e) { return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "7BjC": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1] }
                e.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d päeva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "7C5Q": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-in", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "7PS+": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarHospital( input.value )" type="text" class="form-control" placeholder="Buscar hospital...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="cargando">\n    <div class="col-sm-12">\n        <div class="alert-warning text-center">\n            <strong>Cargando</strong>\n            <br>\n            <i class="fa fa-refresh fa-spin fa-2x"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="!cargando">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h3 class="card-title">Hospitales registrados ( <small>{{ totalRegistros }}</small> )</h3>\n                <div class="text-right">\n                    <button (click)="crearHospital()" class="btn waves-effect waves-light btn-rounded btn-primary">\n                        <i class="fa fa-plus"></i>\n                        Crear Hospital\n                    </button>\n                </div>\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Imagen</th>\n                            <th>Hospital</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor="let hospital of hospitales">\n                            <td class="w70">\n                                <img (click)="mostrarModal( hospital._id )" [src]="hospital.img | imagen:\'hospital\'" class="img-50  pointer">\n                            </td>\n                            <td (click)="cambiarNombre( hospital )">\n                                {{hospital.nombre}}\n                            </td>\n                            <td>\n                                <button (click)="guardarHospital( hospital)" class="btn btn-primary">\n                                <i class="fa fa-save"></i>\n                                </button>\n\n                                <button (click)="borrarHospital( hospital )" class="btn btn-danger">\n                                <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                  Anteriores\n                </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                  Siguientes\n                </button>\n\n            </div>\n        </div>\n    </div>\n</div>'
        },
        "7aV9": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", ss: "තත්පර %d", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function(e) { return e + " වැනි" }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function(e) { return "ප.ව." === e || "පස් වරු" === e }, meridiem: function(e, t, a) { return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු" } })
            }(a("wd/R"))
        },
        "8/+R": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
                    a = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };
                e.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "[ਅਗਲਾ] dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", ss: "%d ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function(e) { return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "8mBD": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("pt", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "9rRi": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], monthsParseExact: !0, weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "A+xa": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function(e) { return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран") }, past: "%s каялла", s: "пӗр-ик ҫеккунт", ss: "%d ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        AQ68: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        AvvY: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", ss: "%d സെക്കൻഡ്", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function(e, t) { return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e }, meridiem: function(e, t, a) { return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി" } })
            }(a("wd/R"))
        },
        B55N: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ja", {
                    eras: [{ since: "2019-05-01", offset: 1, name: "令和", narrow: "㋿", abbr: "R" }, { since: "1989-01-08", until: "2019-04-30", offset: 1, name: "平成", narrow: "㍻", abbr: "H" }, { since: "1926-12-25", until: "1989-01-07", offset: 1, name: "昭和", narrow: "㍼", abbr: "S" }, { since: "1912-07-30", until: "1926-12-24", offset: 1, name: "大正", narrow: "㍽", abbr: "T" }, { since: "1873-01-01", until: "1912-07-29", offset: 6, name: "明治", narrow: "㍾", abbr: "M" }, { since: "0001-01-01", until: "1873-12-31", offset: 1, name: "西暦", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "紀元前", narrow: "BC", abbr: "BC" }],
                    eraYearOrdinalRegex: /(元|\d+)年/,
                    eraYearOrdinalParse: function(e, t) { return "元" === t[1] ? 1 : parseInt(t[1] || e, 10) },
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" },
                    meridiemParse: /午前|午後/i,
                    isPM: function(e) { return "午後" === e },
                    meridiem: function(e, t, a) { return e < 12 ? "午前" : "午後" },
                    calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function(e) { return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT" }, lastDay: "[昨日] LT", lastWeek: function(e) { return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT" }, sameElse: "L" },
                    dayOfMonthOrdinalParse: /\d{1,2}日/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "y":
                                return 1 === e ? "元年" : e + "年";
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            default:
                                return e
                        }
                    },
                    relativeTime: { future: "%s後", past: "%s前", s: "数秒", ss: "%d秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" }
                })
            }(a("wd/R"))
        },
        BJEJ: function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div style="display: block">\n    <canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"></canvas>\n</div>'
        },
        BVg3: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e) { return e % 100 == 11 || e % 10 != 1 }

                function a(e, a, n, r) {
                    var i = e + " ";
                    switch (n) {
                        case "s":
                            return a || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                        case "ss":
                            return t(e) ? i + (a || r ? "sekúndur" : "sekúndum") : i + "sekúnda";
                        case "m":
                            return a ? "mínúta" : "mínútu";
                        case "mm":
                            return t(e) ? i + (a || r ? "mínútur" : "mínútum") : a ? i + "mínúta" : i + "mínútu";
                        case "hh":
                            return t(e) ? i + (a || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                        case "d":
                            return a ? "dagur" : r ? "dag" : "degi";
                        case "dd":
                            return t(e) ? a ? i + "dagar" : i + (r ? "daga" : "dögum") : a ? i + "dagur" : i + (r ? "dag" : "degi");
                        case "M":
                            return a ? "mánuður" : r ? "mánuð" : "mánuði";
                        case "MM":
                            return t(e) ? a ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : a ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                        case "y":
                            return a || r ? "ár" : "ári";
                        case "yy":
                            return t(e) ? i + (a || r ? "ár" : "árum") : i + (a || r ? "ár" : "ári")
                    }
                }
                e.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: a, ss: a, m: a, mm: a, h: "klukkustund", hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        ByF4: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        CjzT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        CoRJ: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        "D/JM": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        "DKr+": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { s: ["thoddea sekondamni", "thodde sekond"], ss: [e + " sekondamni", e + " sekond"], m: ["eka mintan", "ek minut"], mm: [e + " mintamni", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voramni", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disamni", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineamni", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsamni", e + " vorsam"] }; return n ? r[a][0] : r[a][1] }
                e.defineLocale("gom-latn", {
                    months: { standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"), isFormat: /MMMM(\s)+D[oD]?/ },
                    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" },
                    calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Fuddlo] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fattlo] dddd[,] LT", sameElse: "L" },
                    relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + "er";
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                            case "w":
                            case "W":
                                return e
                        }
                    },
                    week: { dow: 1, doy: 4 },
                    meridiemParse: /rati|sokallim|donparam|sanje/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" }
                })
            }(a("wd/R"))
        },
        Dkky: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr-ch", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" },
                    relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        Dmvi: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 0, doy: 4 } })
            }(a("wd/R"))
        },
        DoHr: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };
                e.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    meridiem: function(e, t, a) { return e < 12 ? a ? "öö" : "ÖÖ" : a ? "ös" : "ÖS" },
                    meridiemParse: /öö|ÖÖ|ös|ÖS/,
                    isPM: function(e) { return "ös" === e || "ÖS" === e },
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen] dddd [saat] LT", sameElse: "L" },
                    relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" },
                    ordinal: function(e, a) {
                        switch (a) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'ıncı";
                                var n = e % 10,
                                    r = e % 100 - n,
                                    i = e >= 100 ? 100 : null;
                                return e + (t[n] || t[r] || t[i])
                        }
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        DxQv: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        Dzi0: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "E+lV": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { words: { ss: ["секунда", "секунде", "секунди"], m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, a, n) { var r = t.words[n]; return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("sr-cyrl", {
                    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[у] [недељу] [у] LT";
                                case 3:
                                    return "[у] [среду] [у] LT";
                                case 6:
                                    return "[у] [суботу] [у] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[у] dddd [у] LT"
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function() { return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()] },
                        sameElse: "L"
                    },
                    relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "дан", dd: t.translate, M: "месец", MM: t.translate, y: "годину", yy: t.translate },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        EOgW: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function(e) { return "หลังเที่ยง" === e }, meridiem: function(e, t, a) { return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", ss: "%d วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } })
            }(a("wd/R"))
        },
        Fnuy: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("oc-lnc", { months: { standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: "[uèi a] LT", nextDay: "[deman a] LT", nextWeek: "dddd [a] LT", lastDay: "[ièr a] LT", lastWeek: "dddd [passat a] LT", sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", ss: "%d segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(e, t) { var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"; return "w" !== t && "W" !== t || (a = "a"), e + a }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        G0Uy: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[Għada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-bieraħ fil-]LT", lastWeek: "dddd [li għadda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        H8ED: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) { var n, r, i; return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }[a], r = +e, i = n.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) }
                e.defineLocale("be", {
                    months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") },
                    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                    weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/ },
                    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function() { return "[У] dddd [ў] LT" },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[У мінулую] dddd [ў] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[У мінулы] dddd [ў] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: t, mm: t, h: t, hh: t, d: "дзень", dd: t, M: "месяц", MM: t, y: "год", yy: t },
                    meridiemParse: /ночы|раніцы|дня|вечара/,
                    isPM: function(e) { return /^(дня|вечара)$/.test(e) },
                    meridiem: function(e, t, a) { return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                            case "D":
                                return e + "-га";
                            default:
                                return e
                        }
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        HP3h: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
                    a = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    n = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
                    r = function(e) {
                        return function(t, r, i, s) {
                            var o = a(t),
                                d = n[e][a(t)];
                            return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                        }
                    },
                    i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-ly", { months: i, monthsShort: i, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: r("s"), ss: r("s"), m: r("m"), mm: r("m"), h: r("h"), hh: r("h"), d: r("d"), dd: r("d"), M: r("M"), MM: r("M"), y: r("y"), yy: r("y") }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        IBtZ: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ka", { months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function(e) { return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(e, t, a) { return "ი" === a ? t + "ში" : t + a + "ში" })) }, past: function(e) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e }, s: "რამდენიმე წამი", ss: "%d წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        "Ivi+": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ko", {
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" },
                    calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" },
                    relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" },
                    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "일";
                            case "M":
                                return e + "월";
                            case "w":
                            case "W":
                                return e + "주";
                            default:
                                return e
                        }
                    },
                    meridiemParse: /오전|오후/,
                    isPM: function(e) { return "오후" === e },
                    meridiem: function(e, t, a) { return e < 12 ? "오전" : "오후" }
                })
            }(a("wd/R"))
        },
        Ixm7: function(e, t, a) {
            "use strict";
            a.r(t), t.default = "<p>\n  dashboard works!\n</p>\n"
        },
        "JCF/": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                    a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
                    n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
                e.defineLocale("ku", { months: n, monthsShort: n, weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"), weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"), weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /ئێواره‌|به‌یانی/, isPM: function(e) { return /ئێواره‌/.test(e) }, meridiem: function(e, t, a) { return e < 12 ? "به‌یانی" : "ئێواره‌" }, calendar: { sameDay: "[ئه‌مرۆ كاتژمێر] LT", nextDay: "[به‌یانی كاتژمێر] LT", nextWeek: "dddd [كاتژمێر] LT", lastDay: "[دوێنێ كاتژمێر] LT", lastWeek: "dddd [كاتژمێر] LT", sameElse: "L" }, relativeTime: { future: "له‌ %s", past: "%s", s: "چه‌ند چركه‌یه‌ك", ss: "چركه‌ %d", m: "یه‌ك خوله‌ك", mm: "%d خوله‌ك", h: "یه‌ك كاتژمێر", hh: "%d كاتژمێر", d: "یه‌ك ڕۆژ", dd: "%d ڕۆژ", M: "یه‌ك مانگ", MM: "%d مانگ", y: "یه‌ك ساڵ", yy: "%d ساڵ" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) { return a[e] })).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        JVSJ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return n += 1 === e ? "dan" : "dana";
                        case "MM":
                            return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                e.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        "Ju5/": function(e, t, a) {
            "use strict";
            var n = a("XqMk"),
                r = "object" == typeof self && self && self.Object === Object && self,
                i = n.a || r || Function("return this")();
            t.a = i
        },
        JvlW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { ss: "sekundė_sekundžių_sekundes", m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };

                function a(e, t, a, n) { return t ? r(a)[0] : n ? r(a)[1] : r(a)[2] }

                function n(e) { return e % 10 == 0 || e > 10 && e < 20 }

                function r(e) { return t[e].split("_") }

                function i(e, t, i, s) { var o = e + " "; return 1 === e ? o + a(0, t, i[0], s) : t ? o + (n(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (n(e) ? r(i)[1] : r(i)[2]) }
                e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: function(e, t, a, n) { return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes" }, ss: i, m: a, mm: i, h: a, hh: i, d: a, dd: i, M: a, MM: i, y: a, yy: i }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        "K/tc": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, a) { return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        KSF8: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, t, a) { return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần trước lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", ss: "%d giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        KTz0: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, a, n) { var r = t.words[n]; return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() { return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mjesec", MM: t.translate, y: "godinu", yy: t.translate },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        KVSu: function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row">\n\n\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Usuarios</h4>\n                <table class="table table-hover" *ngIf="usuarios.length > 0">\n                    <tbody>\n                        <tr *ngFor="let usuario of usuarios" [routerLink]="[\'/usuarios\']" class="pointer">\n                            <td class="w70">\n                                <img [src]="usuario.img | imagen:\'usuario\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{usuario.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="usuarios.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Hospitales</h4>\n                <table class="table table-hover" *ngIf="hospitales.length > 0">\n                    <tbody>\n                        <tr *ngFor="let hospital of hospitales" [routerLink]="[\'/hospitales\']" class="pointer">\n                            <td class="w70">\n                                <img [src]="hospital.img | imagen:\'hospital\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{hospital.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="hospitales.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class="col-4">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="cardtitle">Medicos</h4>\n                <table class="table table-hover" *ngIf="medicos.length > 0">\n                    <tbody>\n                        <tr *ngFor="let medico of medicos" [routerLink]="[\'/medico\',medico._id]" class="pointer">\n                            <td class="w70">\n                                <img [src]="medico.img | imagen:\'medico\'" class="img-50  img-circle">\n                            </td>\n                            <td>{{medico.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="alert alert-info" *ngIf="medicos.length === 0">\n                    NO HAY REGISTROS!\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>'
        },
        L3Qv: function(e, t, a) {
            "use strict";
            t.a = function() { return !1 }
        },
        Loxo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", ss: "%d фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        "MO+k": function(e, t, a) {
            e.exports = function(e) {
                "use strict";
                e = e && e.hasOwnProperty("default") ? e.default : e;
                var t = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    a = function(e, t) { return e(t = { exports: {} }, t.exports), t.exports }((function(e) {
                        var a = {};
                        for (var n in t) t.hasOwnProperty(n) && (a[t[n]] = n);
                        var r = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
                        for (var i in r)
                            if (r.hasOwnProperty(i)) {
                                if (!("channels" in r[i])) throw new Error("missing channels property: " + i);
                                if (!("labels" in r[i])) throw new Error("missing channel labels property: " + i);
                                if (r[i].labels.length !== r[i].channels) throw new Error("channel and label counts mismatch: " + i);
                                var s = r[i].channels,
                                    o = r[i].labels;
                                delete r[i].channels, delete r[i].labels, Object.defineProperty(r[i], "channels", { value: s }), Object.defineProperty(r[i], "labels", { value: o })
                            }
                        r.rgb.hsl = function(e) {
                            var t, a, n = e[0] / 255,
                                r = e[1] / 255,
                                i = e[2] / 255,
                                s = Math.min(n, r, i),
                                o = Math.max(n, r, i),
                                d = o - s;
                            return o === s ? t = 0 : n === o ? t = (r - i) / d : r === o ? t = 2 + (i - n) / d : i === o && (t = 4 + (n - r) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (s + o) / 2, [t, 100 * (o === s ? 0 : a <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
                        }, r.rgb.hsv = function(e) {
                            var t, a, n, r, i, s = e[0] / 255,
                                o = e[1] / 255,
                                d = e[2] / 255,
                                l = Math.max(s, o, d),
                                u = l - Math.min(s, o, d),
                                c = function(e) { return (l - e) / 6 / u + .5 };
                            return 0 === u ? r = i = 0 : (i = u / l, t = c(s), a = c(o), n = c(d), s === l ? r = n - a : o === l ? r = 1 / 3 + t - n : d === l && (r = 2 / 3 + a - t), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * i, 100 * l]
                        }, r.rgb.hwb = function(e) {
                            var t = e[0],
                                a = e[1],
                                n = e[2];
                            return [r.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(a, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(t, Math.max(a, n)))]
                        }, r.rgb.cmyk = function(e) {
                            var t, a = e[0] / 255,
                                n = e[1] / 255,
                                r = e[2] / 255;
                            return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - r))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t]
                        }, r.rgb.keyword = function(e) {
                            var n = a[e];
                            if (n) return n;
                            var r, i, s, o = 1 / 0;
                            for (var d in t)
                                if (t.hasOwnProperty(d)) {
                                    var l = t[d],
                                        u = (i = e, s = l, Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2) + Math.pow(i[2] - s[2], 2));
                                    u < o && (o = u, r = d)
                                }
                            return r
                        }, r.keyword.rgb = function(e) { return t[e] }, r.rgb.xyz = function(e) {
                            var t = e[0] / 255,
                                a = e[1] / 255,
                                n = e[2] / 255;
                            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
                        }, r.rgb.lab = function(e) {
                            var t = r.rgb.xyz(e),
                                a = t[0],
                                n = t[1],
                                i = t[2];
                            return n /= 100, i /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                        }, r.hsl.rgb = function(e) {
                            var t, a, n, r, i, s = e[0] / 360,
                                o = e[1] / 100,
                                d = e[2] / 100;
                            if (0 === o) return [i = 255 * d, i, i];
                            t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o), r = [0, 0, 0];
                            for (var l = 0; l < 3; l++)(n = s + 1 / 3 * -(l - 1)) < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[l] = 255 * i;
                            return r
                        }, r.hsl.hsv = function(e) {
                            var t = e[0],
                                a = e[1] / 100,
                                n = e[2] / 100,
                                r = a,
                                i = Math.max(n, .01);
                            return a *= (n *= 2) <= 1 ? n : 2 - n, r *= i <= 1 ? i : 2 - i, [t, 100 * (0 === n ? 2 * r / (i + r) : 2 * a / (n + a)), (n + a) / 2 * 100]
                        }, r.hsv.rgb = function(e) {
                            var t = e[0] / 60,
                                a = e[1] / 100,
                                n = e[2] / 100,
                                r = Math.floor(t) % 6,
                                i = t - Math.floor(t),
                                s = 255 * n * (1 - a),
                                o = 255 * n * (1 - a * i),
                                d = 255 * n * (1 - a * (1 - i));
                            switch (n *= 255, r) {
                                case 0:
                                    return [n, d, s];
                                case 1:
                                    return [o, n, s];
                                case 2:
                                    return [s, n, d];
                                case 3:
                                    return [s, o, n];
                                case 4:
                                    return [d, s, n];
                                case 5:
                                    return [n, s, o]
                            }
                        }, r.hsv.hsl = function(e) {
                            var t, a, n, r = e[0],
                                i = e[1] / 100,
                                s = e[2] / 100,
                                o = Math.max(s, .01);
                            return n = (2 - i) * s, a = i * o, [r, 100 * (a = (a /= (t = (2 - i) * o) <= 1 ? t : 2 - t) || 0), 100 * (n /= 2)]
                        }, r.hwb.rgb = function(e) {
                            var t, a, n, r, i, s, o, d = e[0] / 360,
                                l = e[1] / 100,
                                u = e[2] / 100,
                                c = l + u;
                            switch (c > 1 && (l /= c, u /= c), n = 6 * d - (t = Math.floor(6 * d)), 0 != (1 & t) && (n = 1 - n), r = l + n * ((a = 1 - u) - l), t) {
                                default:
                                    case 6:
                                    case 0:
                                    i = a,
                                s = r,
                                o = l;
                                break;
                                case 1:
                                        i = r,
                                    s = a,
                                    o = l;
                                    break;
                                case 2:
                                        i = l,
                                    s = a,
                                    o = r;
                                    break;
                                case 3:
                                        i = l,
                                    s = r,
                                    o = a;
                                    break;
                                case 4:
                                        i = r,
                                    s = l,
                                    o = a;
                                    break;
                                case 5:
                                        i = a,
                                    s = l,
                                    o = r
                            }
                            return [255 * i, 255 * s, 255 * o]
                        }, r.cmyk.rgb = function(e) {
                            var t = e[0] / 100,
                                a = e[1] / 100,
                                n = e[2] / 100,
                                r = e[3] / 100;
                            return [255 * (1 - Math.min(1, t * (1 - r) + r)), 255 * (1 - Math.min(1, a * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r))]
                        }, r.xyz.rgb = function(e) {
                            var t, a, n, r = e[0] / 100,
                                i = e[1] / 100,
                                s = e[2] / 100;
                            return a = -.9689 * r + 1.8758 * i + .0415 * s, n = .0557 * r + -.204 * i + 1.057 * s, t = (t = 3.2406 * r + -1.5372 * i + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                        }, r.xyz.lab = function(e) {
                            var t = e[0],
                                a = e[1],
                                n = e[2];
                            return a /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
                        }, r.lab.xyz = function(e) {
                            var t, a, n, r = e[0];
                            t = e[1] / 500 + (a = (r + 16) / 116), n = a - e[2] / 200;
                            var i = Math.pow(a, 3),
                                s = Math.pow(t, 3),
                                o = Math.pow(n, 3);
                            return a = i > .008856 ? i : (a - 16 / 116) / 7.787, t = s > .008856 ? s : (t - 16 / 116) / 7.787, n = o > .008856 ? o : (n - 16 / 116) / 7.787, [t *= 95.047, a *= 100, n *= 108.883]
                        }, r.lab.lch = function(e) {
                            var t, a = e[0],
                                n = e[1],
                                r = e[2];
                            return (t = 360 * Math.atan2(r, n) / 2 / Math.PI) < 0 && (t += 360), [a, Math.sqrt(n * n + r * r), t]
                        }, r.lch.lab = function(e) {
                            var t, a = e[0],
                                n = e[1];
                            return t = e[2] / 360 * 2 * Math.PI, [a, n * Math.cos(t), n * Math.sin(t)]
                        }, r.rgb.ansi16 = function(e) {
                            var t = e[0],
                                a = e[1],
                                n = e[2],
                                i = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
                            if (0 === (i = Math.round(i / 50))) return 30;
                            var s = 30 + (Math.round(n / 255) << 2 | Math.round(a / 255) << 1 | Math.round(t / 255));
                            return 2 === i && (s += 60), s
                        }, r.hsv.ansi16 = function(e) { return r.rgb.ansi16(r.hsv.rgb(e), e[2]) }, r.rgb.ansi256 = function(e) {
                            var t = e[0],
                                a = e[1],
                                n = e[2];
                            return t === a && a === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(n / 255 * 5)
                        }, r.ansi16.rgb = function(e) { var t = e % 10; if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]; var a = .5 * (1 + ~~(e > 50)); return [(1 & t) * a * 255, (t >> 1 & 1) * a * 255, (t >> 2 & 1) * a * 255] }, r.ansi256.rgb = function(e) { if (e >= 232) { var t = 10 * (e - 232) + 8; return [t, t, t] } var a; return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((a = e % 36) / 6) / 5 * 255, a % 6 / 5 * 255] }, r.rgb.hex = function(e) { var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase(); return "000000".substring(t.length) + t }, r.hex.rgb = function(e) {
                            var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                            if (!t) return [0, 0, 0];
                            var a = t[0];
                            3 === t[0].length && (a = a.split("").map((function(e) { return e + e })).join(""));
                            var n = parseInt(a, 16);
                            return [n >> 16 & 255, n >> 8 & 255, 255 & n]
                        }, r.rgb.hcg = function(e) {
                            var t, a = e[0] / 255,
                                n = e[1] / 255,
                                r = e[2] / 255,
                                i = Math.max(Math.max(a, n), r),
                                s = Math.min(Math.min(a, n), r),
                                o = i - s;
                            return t = o <= 0 ? 0 : i === a ? (n - r) / o % 6 : i === n ? 2 + (r - a) / o : 4 + (a - n) / o + 4, t /= 6, [360 * (t %= 1), 100 * o, 100 * (o < 1 ? s / (1 - o) : 0)]
                        }, r.hsl.hcg = function(e) {
                            var t = e[1] / 100,
                                a = e[2] / 100,
                                n = 1,
                                r = 0;
                            return (n = a < .5 ? 2 * t * a : 2 * t * (1 - a)) < 1 && (r = (a - .5 * n) / (1 - n)), [e[0], 100 * n, 100 * r]
                        }, r.hsv.hcg = function(e) {
                            var t = e[1] / 100,
                                a = e[2] / 100,
                                n = t * a,
                                r = 0;
                            return n < 1 && (r = (a - n) / (1 - n)), [e[0], 100 * n, 100 * r]
                        }, r.hcg.rgb = function(e) {
                            var t = e[0] / 360,
                                a = e[1] / 100,
                                n = e[2] / 100;
                            if (0 === a) return [255 * n, 255 * n, 255 * n];
                            var r, i = [0, 0, 0],
                                s = t % 1 * 6,
                                o = s % 1,
                                d = 1 - o;
                            switch (Math.floor(s)) {
                                case 0:
                                    i[0] = 1, i[1] = o, i[2] = 0;
                                    break;
                                case 1:
                                    i[0] = d, i[1] = 1, i[2] = 0;
                                    break;
                                case 2:
                                    i[0] = 0, i[1] = 1, i[2] = o;
                                    break;
                                case 3:
                                    i[0] = 0, i[1] = d, i[2] = 1;
                                    break;
                                case 4:
                                    i[0] = o, i[1] = 0, i[2] = 1;
                                    break;
                                default:
                                    i[0] = 1, i[1] = 0, i[2] = d
                            }
                            return r = (1 - a) * n, [255 * (a * i[0] + r), 255 * (a * i[1] + r), 255 * (a * i[2] + r)]
                        }, r.hcg.hsv = function(e) {
                            var t = e[1] / 100,
                                a = t + e[2] / 100 * (1 - t),
                                n = 0;
                            return a > 0 && (n = t / a), [e[0], 100 * n, 100 * a]
                        }, r.hcg.hsl = function(e) {
                            var t = e[1] / 100,
                                a = e[2] / 100 * (1 - t) + .5 * t,
                                n = 0;
                            return a > 0 && a < .5 ? n = t / (2 * a) : a >= .5 && a < 1 && (n = t / (2 * (1 - a))), [e[0], 100 * n, 100 * a]
                        }, r.hcg.hwb = function(e) {
                            var t = e[1] / 100,
                                a = t + e[2] / 100 * (1 - t);
                            return [e[0], 100 * (a - t), 100 * (1 - a)]
                        }, r.hwb.hcg = function(e) {
                            var t = e[1] / 100,
                                a = 1 - e[2] / 100,
                                n = a - t,
                                r = 0;
                            return n < 1 && (r = (a - n) / (1 - n)), [e[0], 100 * n, 100 * r]
                        }, r.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] }, r.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] }, r.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] }, r.gray.hsl = r.gray.hsv = function(e) { return [0, 0, e[0]] }, r.gray.hwb = function(e) { return [0, 100, e[0]] }, r.gray.cmyk = function(e) { return [0, 0, 0, e[0]] }, r.gray.lab = function(e) { return [e[0], 0, 0] }, r.gray.hex = function(e) {
                            var t = 255 & Math.round(e[0] / 100 * 255),
                                a = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                            return "000000".substring(a.length) + a
                        }, r.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] }
                    }));

                function n(e) {
                    var t = function() { for (var e = {}, t = Object.keys(a), n = t.length, r = 0; r < n; r++) e[t[r]] = { distance: -1, parent: null }; return e }(),
                        n = [e];
                    for (t[e].distance = 0; n.length;)
                        for (var r = n.pop(), i = Object.keys(a[r]), s = i.length, o = 0; o < s; o++) {
                            var d = i[o],
                                l = t[d]; - 1 === l.distance && (l.distance = t[r].distance + 1, l.parent = r, n.unshift(d))
                        }
                    return t
                }

                function r(e, t) { return function(a) { return t(e(a)) } }

                function i(e, t) { for (var n = [t[e].parent, e], i = a[t[e].parent][e], s = t[e].parent; t[s].parent;) n.unshift(t[s].parent), i = r(a[t[s].parent][s], i), s = t[s].parent; return i.conversion = n, i }
                a.rgb, a.hsl, a.hsv, a.hwb, a.cmyk, a.xyz, a.lab, a.lch, a.hex, a.keyword, a.ansi16, a.ansi256, a.hcg, a.apple, a.gray;
                var s = {};
                Object.keys(a).forEach((function(e) {
                    s[e] = {}, Object.defineProperty(s[e], "channels", { value: a[e].channels }), Object.defineProperty(s[e], "labels", { value: a[e].labels });
                    var t = function(e) {
                        for (var t = n(e), a = {}, r = Object.keys(t), s = r.length, o = 0; o < s; o++) {
                            var d = r[o];
                            null !== t[d].parent && (a[d] = i(d, t))
                        }
                        return a
                    }(e);
                    Object.keys(t).forEach((function(a) {
                        var n = t[a];
                        s[e][a] = function(e) {
                            var t = function(t) {
                                if (null == t) return t;
                                arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                                var a = e(t);
                                if ("object" == typeof a)
                                    for (var n = a.length, r = 0; r < n; r++) a[r] = Math.round(a[r]);
                                return a
                            };
                            return "conversion" in e && (t.conversion = e.conversion), t
                        }(n), s[e][a].raw = function(e) { var t = function(t) { return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t)) }; return "conversion" in e && (t.conversion = e.conversion), t }(n)
                    }))
                }));
                var o = s,
                    d = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                    l = {
                        getRgba: u,
                        getHsla: c,
                        getRgb: function(e) { var t = u(e); return t && t.slice(0, 3) },
                        getHsl: function(e) { var t = c(e); return t && t.slice(0, 3) },
                        getHwb: h,
                        getAlpha: function(e) { var t = u(e); return t ? t[3] : (t = c(e)) ? t[3] : (t = h(e)) ? t[3] : void 0 },
                        hexString: function(e, t) { return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + g(e[0]) + g(e[1]) + g(e[2]) + (t >= 0 && t < 1 ? g(Math.round(255 * t)) : "") },
                        rgbString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? _(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" },
                        rgbaString: _,
                        percentString: function(e, t) {
                            if (t < 1 || e[3] && e[3] < 1) return m(e, t);
                            var a = Math.round(e[0] / 255 * 100),
                                n = Math.round(e[1] / 255 * 100),
                                r = Math.round(e[2] / 255 * 100);
                            return "rgb(" + a + "%, " + n + "%, " + r + "%)"
                        },
                        percentaString: m,
                        hslString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? f(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" },
                        hslaString: f,
                        hwbString: function(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")" },
                        keyword: function(e) { return y[e.slice(0, 3)] }
                    };

                function u(e) {
                    if (e) {
                        var t = [0, 0, 0],
                            a = 1,
                            n = e.match(/^#([a-fA-F0-9]{3,4})$/i),
                            r = "";
                        if (n) {
                            r = (n = n[1])[3];
                            for (var i = 0; i < t.length; i++) t[i] = parseInt(n[i] + n[i], 16);
                            r && (a = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
                        } else if (n = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                            for (r = n[2], n = n[1], i = 0; i < t.length; i++) t[i] = parseInt(n.slice(2 * i, 2 * i + 2), 16);
                            r && (a = Math.round(parseInt(r, 16) / 255 * 100) / 100)
                        } else if (n = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (i = 0; i < t.length; i++) t[i] = parseInt(n[i + 1]);
                            a = parseFloat(n[4])
                        } else if (n = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (i = 0; i < t.length; i++) t[i] = Math.round(2.55 * parseFloat(n[i + 1]));
                            a = parseFloat(n[4])
                        } else if (n = e.match(/(\w+)/)) { if ("transparent" == n[1]) return [0, 0, 0, 0]; if (!(t = d[n[1]])) return }
                        for (i = 0; i < t.length; i++) t[i] = p(t[i], 0, 255);
                        return a = a || 0 == a ? p(a, 0, 1) : 1, t[3] = a, t
                    }
                }

                function c(e) { if (e) { var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var a = parseFloat(t[4]); return [p(parseInt(t[1]), 0, 360), p(parseFloat(t[2]), 0, 100), p(parseFloat(t[3]), 0, 100), p(isNaN(a) ? 1 : a, 0, 1)] } } }

                function h(e) { if (e) { var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var a = parseFloat(t[4]); return [p(parseInt(t[1]), 0, 360), p(parseFloat(t[2]), 0, 100), p(parseFloat(t[3]), 0, 100), p(isNaN(a) ? 1 : a, 0, 1)] } } }

                function _(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")" }

                function m(e, t) { return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")" }

                function f(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")" }

                function p(e, t, a) { return Math.min(Math.max(t, e), a) }

                function g(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t }
                var y = {};
                for (var M in d) y[d[M]] = M;
                var v = function(e) { return e instanceof v ? e : this instanceof v ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof e ? (t = l.getRgba(e)) ? this.setValues("rgb", t) : (t = l.getHsla(e)) ? this.setValues("hsl", t) : (t = l.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new v(e); var t };
                v.prototype = {
                    isValid: function() { return this.valid },
                    rgb: function() { return this.setSpace("rgb", arguments) },
                    hsl: function() { return this.setSpace("hsl", arguments) },
                    hsv: function() { return this.setSpace("hsv", arguments) },
                    hwb: function() { return this.setSpace("hwb", arguments) },
                    cmyk: function() { return this.setSpace("cmyk", arguments) },
                    rgbArray: function() { return this.values.rgb },
                    hslArray: function() { return this.values.hsl },
                    hsvArray: function() { return this.values.hsv },
                    hwbArray: function() { var e = this.values; return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb },
                    cmykArray: function() { return this.values.cmyk },
                    rgbaArray: function() { var e = this.values; return e.rgb.concat([e.alpha]) },
                    hslaArray: function() { var e = this.values; return e.hsl.concat([e.alpha]) },
                    alpha: function(e) { return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this) },
                    red: function(e) { return this.setChannel("rgb", 0, e) },
                    green: function(e) { return this.setChannel("rgb", 1, e) },
                    blue: function(e) { return this.setChannel("rgb", 2, e) },
                    hue: function(e) { return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e) },
                    saturation: function(e) { return this.setChannel("hsl", 1, e) },
                    lightness: function(e) { return this.setChannel("hsl", 2, e) },
                    saturationv: function(e) { return this.setChannel("hsv", 1, e) },
                    whiteness: function(e) { return this.setChannel("hwb", 1, e) },
                    blackness: function(e) { return this.setChannel("hwb", 2, e) },
                    value: function(e) { return this.setChannel("hsv", 2, e) },
                    cyan: function(e) { return this.setChannel("cmyk", 0, e) },
                    magenta: function(e) { return this.setChannel("cmyk", 1, e) },
                    yellow: function(e) { return this.setChannel("cmyk", 2, e) },
                    black: function(e) { return this.setChannel("cmyk", 3, e) },
                    hexString: function() { return l.hexString(this.values.rgb) },
                    rgbString: function() { return l.rgbString(this.values.rgb, this.values.alpha) },
                    rgbaString: function() { return l.rgbaString(this.values.rgb, this.values.alpha) },
                    percentString: function() { return l.percentString(this.values.rgb, this.values.alpha) },
                    hslString: function() { return l.hslString(this.values.hsl, this.values.alpha) },
                    hslaString: function() { return l.hslaString(this.values.hsl, this.values.alpha) },
                    hwbString: function() { return l.hwbString(this.values.hwb, this.values.alpha) },
                    keyword: function() { return l.keyword(this.values.rgb, this.values.alpha) },
                    rgbNumber: function() { var e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2] },
                    luminosity: function() {
                        for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
                            var n = e[a] / 255;
                            t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                        }
                        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                    },
                    contrast: function(e) {
                        var t = this.luminosity(),
                            a = e.luminosity();
                        return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
                    },
                    level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" },
                    dark: function() { var e = this.values.rgb; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 },
                    light: function() { return !this.dark() },
                    negate: function() { for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t]; return this.setValues("rgb", e), this },
                    lighten: function(e) { var t = this.values.hsl; return t[2] += t[2] * e, this.setValues("hsl", t), this },
                    darken: function(e) { var t = this.values.hsl; return t[2] -= t[2] * e, this.setValues("hsl", t), this },
                    saturate: function(e) { var t = this.values.hsl; return t[1] += t[1] * e, this.setValues("hsl", t), this },
                    desaturate: function(e) { var t = this.values.hsl; return t[1] -= t[1] * e, this.setValues("hsl", t), this },
                    whiten: function(e) { var t = this.values.hwb; return t[1] += t[1] * e, this.setValues("hwb", t), this },
                    blacken: function(e) { var t = this.values.hwb; return t[2] += t[2] * e, this.setValues("hwb", t), this },
                    greyscale: function() {
                        var e = this.values.rgb,
                            t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                        return this.setValues("rgb", [t, t, t]), this
                    },
                    clearer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t - t * e), this },
                    opaquer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t + t * e), this },
                    rotate: function(e) {
                        var t = this.values.hsl,
                            a = (t[0] + e) % 360;
                        return t[0] = a < 0 ? 360 + a : a, this.setValues("hsl", t), this
                    },
                    mix: function(e, t) {
                        var a = e,
                            n = void 0 === t ? .5 : t,
                            r = 2 * n - 1,
                            i = this.alpha() - a.alpha(),
                            s = ((r * i == -1 ? r : (r + i) / (1 + r * i)) + 1) / 2,
                            o = 1 - s;
                        return this.rgb(s * this.red() + o * a.red(), s * this.green() + o * a.green(), s * this.blue() + o * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
                    },
                    toJSON: function() { return this.rgb() },
                    clone: function() {
                        var e, t, a = new v,
                            n = this.values,
                            r = a.values;
                        for (var i in n) n.hasOwnProperty(i) && (e = n[i], "[object Array]" === (t = {}.toString.call(e)) ? r[i] = e.slice(0) : "[object Number]" === t ? r[i] = e : console.error("unexpected color value:", e));
                        return a
                    }
                }, v.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, v.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, v.prototype.getValues = function(e) { for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n]; return 1 !== t.alpha && (a.a = t.alpha), a }, v.prototype.setValues = function(e, t) {
                    var a, n, r = this.values,
                        i = this.spaces,
                        s = this.maxes,
                        d = 1;
                    if (this.valid = !0, "alpha" === e) d = t;
                    else if (t.length) r[e] = t.slice(0, e.length), d = t[e.length];
                    else if (void 0 !== t[e.charAt(0)]) {
                        for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
                        d = t.a
                    } else if (void 0 !== t[i[e][0]]) {
                        var l = i[e];
                        for (a = 0; a < e.length; a++) r[e][a] = t[l[a]];
                        d = t.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === d ? r.alpha : d)), "alpha" === e) return !1;
                    for (a = 0; a < e.length; a++) n = Math.max(0, Math.min(s[e][a], r[e][a])), r[e][a] = Math.round(n);
                    for (var u in i) u !== e && (r[u] = o[e][u](r[e]));
                    return !0
                }, v.prototype.setSpace = function(e, t) { var a = t[0]; return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this) }, v.prototype.setChannel = function(e, t, a) { var n = this.values[e]; return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a, this.setValues(e, n), this) }, "undefined" != typeof window && (window.Color = v);
                var b, L = v,
                    Y = {
                        noop: function() {},
                        uid: (b = 0, function() { return b++ }),
                        isNullOrUndef: function(e) { return null == e },
                        isArray: function(e) { if (Array.isArray && Array.isArray(e)) return !0; var t = Object.prototype.toString.call(e); return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6) },
                        isObject: function(e) { return null !== e && "[object Object]" === Object.prototype.toString.call(e) },
                        isFinite: function(e) { return ("number" == typeof e || e instanceof Number) && isFinite(e) },
                        valueOrDefault: function(e, t) { return void 0 === e ? t : e },
                        valueAtIndexOrDefault: function(e, t, a) { return Y.valueOrDefault(Y.isArray(e) ? e[t] : e, a) },
                        callback: function(e, t, a) { if (e && "function" == typeof e.call) return e.apply(a, t) },
                        each: function(e, t, a, n) {
                            var r, i, s;
                            if (Y.isArray(e))
                                if (i = e.length, n)
                                    for (r = i - 1; r >= 0; r--) t.call(a, e[r], r);
                                else
                                    for (r = 0; r < i; r++) t.call(a, e[r], r);
                            else if (Y.isObject(e))
                                for (i = (s = Object.keys(e)).length, r = 0; r < i; r++) t.call(a, e[s[r]], s[r])
                        },
                        arrayEquals: function(e, t) {
                            var a, n, r, i;
                            if (!e || !t || e.length !== t.length) return !1;
                            for (a = 0, n = e.length; a < n; ++a)
                                if (r = e[a], i = t[a], r instanceof Array && i instanceof Array) { if (!Y.arrayEquals(r, i)) return !1 } else if (r !== i) return !1;
                            return !0
                        },
                        clone: function(e) { if (Y.isArray(e)) return e.map(Y.clone); if (Y.isObject(e)) { for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r) t[a[r]] = Y.clone(e[a[r]]); return t } return e },
                        _merger: function(e, t, a, n) {
                            var r = t[e],
                                i = a[e];
                            Y.isObject(r) && Y.isObject(i) ? Y.merge(r, i, n) : t[e] = Y.clone(i)
                        },
                        _mergerIf: function(e, t, a) {
                            var n = t[e],
                                r = a[e];
                            Y.isObject(n) && Y.isObject(r) ? Y.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = Y.clone(r))
                        },
                        merge: function(e, t, a) {
                            var n, r, i, s, o, d = Y.isArray(t) ? t : [t],
                                l = d.length;
                            if (!Y.isObject(e)) return e;
                            for (n = (a = a || {}).merger || Y._merger, r = 0; r < l; ++r)
                                if (t = d[r], Y.isObject(t))
                                    for (o = 0, s = (i = Object.keys(t)).length; o < s; ++o) n(i[o], e, t, a);
                            return e
                        },
                        mergeIf: function(e, t) { return Y.merge(e, t, { merger: Y._mergerIf }) },
                        extend: Object.assign || function(e) { return Y.merge(e, [].slice.call(arguments, 1), { merger: function(e, t, a) { t[e] = a[e] } }) },
                        inherits: function(e) {
                            var t = this,
                                a = e && e.hasOwnProperty("constructor") ? e.constructor : function() { return t.apply(this, arguments) },
                                n = function() { this.constructor = a };
                            return n.prototype = t.prototype, a.prototype = new n, a.extend = Y.inherits, e && Y.extend(a.prototype, e), a.__super__ = t.prototype, a
                        },
                        _deprecated: function(e, t, a, n) { void 0 !== t && console.warn(e + ': "' + a + '" is deprecated. Please use "' + n + '" instead') }
                    },
                    k = Y;
                Y.callCallback = Y.callback, Y.indexOf = function(e, t, a) { return Array.prototype.indexOf.call(e, t, a) }, Y.getValueOrDefault = Y.valueOrDefault, Y.getValueAtIndexOrDefault = Y.valueAtIndexOrDefault;
                var D = {
                        linear: function(e) { return e },
                        easeInQuad: function(e) { return e * e },
                        easeOutQuad: function(e) { return -e * (e - 2) },
                        easeInOutQuad: function(e) { return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) },
                        easeInCubic: function(e) { return e * e * e },
                        easeOutCubic: function(e) { return (e -= 1) * e * e + 1 },
                        easeInOutCubic: function(e) { return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) },
                        easeInQuart: function(e) { return e * e * e * e },
                        easeOutQuart: function(e) { return -((e -= 1) * e * e * e - 1) },
                        easeInOutQuart: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) },
                        easeInQuint: function(e) { return e * e * e * e * e },
                        easeOutQuint: function(e) { return (e -= 1) * e * e * e * e + 1 },
                        easeInOutQuint: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) },
                        easeInSine: function(e) { return 1 - Math.cos(e * (Math.PI / 2)) },
                        easeOutSine: function(e) { return Math.sin(e * (Math.PI / 2)) },
                        easeInOutSine: function(e) { return -.5 * (Math.cos(Math.PI * e) - 1) },
                        easeInExpo: function(e) { return 0 === e ? 0 : Math.pow(2, 10 * (e - 1)) },
                        easeOutExpo: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) },
                        easeInOutExpo: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e)) },
                        easeInCirc: function(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1) },
                        easeOutCirc: function(e) { return Math.sqrt(1 - (e -= 1) * e) },
                        easeInOutCirc: function(e) { return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) },
                        easeInElastic: function(e) {
                            var t = 1.70158,
                                a = 0,
                                n = 1;
                            return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
                        },
                        easeOutElastic: function(e) {
                            var t = 1.70158,
                                a = 0,
                                n = 1;
                            return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
                        },
                        easeInOutElastic: function(e) {
                            var t = 1.70158,
                                a = 0,
                                n = 1;
                            return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
                        },
                        easeInBack: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) },
                        easeOutBack: function(e) { var t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 },
                        easeInOutBack: function(e) { var t = 1.70158; return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2) },
                        easeInBounce: function(e) { return 1 - D.easeOutBounce(1 - e) },
                        easeOutBounce: function(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 },
                        easeInOutBounce: function(e) { return e < .5 ? .5 * D.easeInBounce(2 * e) : .5 * D.easeOutBounce(2 * e - 1) + .5 }
                    },
                    w = { effects: D };
                k.easingEffects = D;
                var x = Math.PI,
                    T = x / 180,
                    S = 2 * x,
                    j = x / 2,
                    H = x / 4,
                    P = 2 * x / 3,
                    O = {
                        clear: function(e) { e.ctx.clearRect(0, 0, e.width, e.height) },
                        roundedRect: function(e, t, a, n, r, i) {
                            if (i) {
                                var s = Math.min(i, r / 2, n / 2),
                                    o = t + s,
                                    d = a + s,
                                    l = t + n - s,
                                    u = a + r - s;
                                e.moveTo(t, d), o < l && d < u ? (e.arc(o, d, s, -x, -j), e.arc(l, d, s, -j, 0), e.arc(l, u, s, 0, j), e.arc(o, u, s, j, x)) : o < l ? (e.moveTo(o, a), e.arc(l, d, s, -j, j), e.arc(o, d, s, j, x + j)) : d < u ? (e.arc(o, d, s, -x, 0), e.arc(o, u, s, 0, x)) : e.arc(o, d, s, -x, x), e.closePath(), e.moveTo(t, a)
                            } else e.rect(t, a, n, r)
                        },
                        drawPoint: function(e, t, a, n, r, i) {
                            var s, o, d, l, u, c = (i || 0) * T;
                            if (t && "object" == typeof t && ("[object HTMLImageElement]" === (s = t.toString()) || "[object HTMLCanvasElement]" === s)) return e.save(), e.translate(n, r), e.rotate(c), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();
                            if (!(isNaN(a) || a <= 0)) {
                                switch (e.beginPath(), t) {
                                    default: e.arc(n, r, a, 0, S),
                                    e.closePath();
                                    break;
                                    case "triangle":
                                            e.moveTo(n + Math.sin(c) * a, r - Math.cos(c) * a),
                                        c += P,
                                        e.lineTo(n + Math.sin(c) * a, r - Math.cos(c) * a),
                                        c += P,
                                        e.lineTo(n + Math.sin(c) * a, r - Math.cos(c) * a),
                                        e.closePath();
                                        break;
                                    case "rectRounded":
                                            l = a - (u = .516 * a),
                                        o = Math.cos(c + H) * l,
                                        d = Math.sin(c + H) * l,
                                        e.arc(n - o, r - d, u, c - x, c - j),
                                        e.arc(n + d, r - o, u, c - j, c),
                                        e.arc(n + o, r + d, u, c, c + j),
                                        e.arc(n - d, r + o, u, c + j, c + x),
                                        e.closePath();
                                        break;
                                    case "rect":
                                            if (!i) { l = Math.SQRT1_2 * a, e.rect(n - l, r - l, 2 * l, 2 * l); break }c += H;
                                    case "rectRot":
                                            o = Math.cos(c) * a,
                                        d = Math.sin(c) * a,
                                        e.moveTo(n - o, r - d),
                                        e.lineTo(n + d, r - o),
                                        e.lineTo(n + o, r + d),
                                        e.lineTo(n - d, r + o),
                                        e.closePath();
                                        break;
                                    case "crossRot":
                                            c += H;
                                    case "cross":
                                            o = Math.cos(c) * a,
                                        d = Math.sin(c) * a,
                                        e.moveTo(n - o, r - d),
                                        e.lineTo(n + o, r + d),
                                        e.moveTo(n + d, r - o),
                                        e.lineTo(n - d, r + o);
                                        break;
                                    case "star":
                                            o = Math.cos(c) * a,
                                        d = Math.sin(c) * a,
                                        e.moveTo(n - o, r - d),
                                        e.lineTo(n + o, r + d),
                                        e.moveTo(n + d, r - o),
                                        e.lineTo(n - d, r + o),
                                        c += H,
                                        o = Math.cos(c) * a,
                                        d = Math.sin(c) * a,
                                        e.moveTo(n - o, r - d),
                                        e.lineTo(n + o, r + d),
                                        e.moveTo(n + d, r - o),
                                        e.lineTo(n - d, r + o);
                                        break;
                                    case "line":
                                            o = Math.cos(c) * a,
                                        d = Math.sin(c) * a,
                                        e.moveTo(n - o, r - d),
                                        e.lineTo(n + o, r + d);
                                        break;
                                    case "dash":
                                            e.moveTo(n, r),
                                        e.lineTo(n + Math.cos(c) * a, r + Math.sin(c) * a)
                                }
                                e.fill(), e.stroke()
                            }
                        },
                        _isPointInArea: function(e, t) { return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6 },
                        clipArea: function(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() },
                        unclipArea: function(e) { e.restore() },
                        lineTo: function(e, t, a, n) {
                            var r = a.steppedLine;
                            if (r) {
                                if ("middle" === r) {
                                    var i = (t.x + a.x) / 2;
                                    e.lineTo(i, n ? a.y : t.y), e.lineTo(i, n ? t.y : a.y)
                                } else "after" === r && !n || "after" !== r && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y);
                                e.lineTo(a.x, a.y)
                            } else a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
                        }
                    },
                    A = O;
                k.clear = O.clear, k.drawRoundedRectangle = function(e) { e.beginPath(), O.roundedRect.apply(O, arguments) };
                var C = { _set: function(e, t) { return k.merge(this[e] || (this[e] = {}), t) } };
                C._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 });
                var R = C,
                    F = k.valueOrDefault,
                    W = {
                        toLineHeight: function(e, t) {
                            var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!a || "normal" === a[1]) return 1.2 * t;
                            switch (e = +a[2], a[3]) {
                                case "px":
                                    return e;
                                case "%":
                                    e /= 100
                            }
                            return t * e
                        },
                        toPadding: function(e) { var t, a, n, r; return k.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, n = +e.bottom || 0, r = +e.left || 0) : t = a = n = r = +e || 0, { top: t, right: a, bottom: n, left: r, height: t + n, width: r + a } },
                        _parseFont: function(e) {
                            var t = R.global,
                                a = F(e.fontSize, t.defaultFontSize),
                                n = { family: F(e.fontFamily, t.defaultFontFamily), lineHeight: k.options.toLineHeight(F(e.lineHeight, t.defaultLineHeight), a), size: a, style: F(e.fontStyle, t.defaultFontStyle), weight: null, string: "" };
                            return n.string = function(e) { return !e || k.isNullOrUndef(e.size) || k.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }(n), n
                        },
                        resolve: function(e, t, a, n) {
                            var r, i, s, o = !0;
                            for (r = 0, i = e.length; r < i; ++r)
                                if (void 0 !== (s = e[r]) && (void 0 !== t && "function" == typeof s && (s = s(t), o = !1), void 0 !== a && k.isArray(s) && (s = s[a], o = !1), void 0 !== s)) return n && !o && (n.cacheable = !1), s
                        }
                    },
                    E = {
                        _factorize: function(e) {
                            var t, a = [],
                                n = Math.sqrt(e);
                            for (t = 1; t < n; t++) e % t == 0 && (a.push(t), a.push(e / t));
                            return n === (0 | n) && a.push(n), a.sort((function(e, t) { return e - t })).pop(), a
                        },
                        log10: Math.log10 || function(e) {
                            var t = Math.log(e) * Math.LOG10E,
                                a = Math.round(t);
                            return e === Math.pow(10, a) ? a : t
                        }
                    },
                    I = E;
                k.log10 = E.log10;
                var z = k,
                    N = w,
                    B = A,
                    V = W,
                    U = I,
                    J = {
                        getRtlAdapter: function(e, t, a) { return e ? function(e, t) { return { x: function(a) { return e + e + t - a }, setWidth: function(e) { t = e }, textAlign: function(e) { return "center" === e ? e : "right" === e ? "left" : "right" }, xPlus: function(e, t) { return e - t }, leftForLtr: function(e, t) { return e - t } } }(t, a) : { x: function(e) { return e }, setWidth: function(e) {}, textAlign: function(e) { return e }, xPlus: function(e, t) { return e + t }, leftForLtr: function(e, t) { return e } } },
                        overrideTextDirection: function(e, t) { var a, n; "ltr" !== t && "rtl" !== t || (n = [(a = e.canvas.style).getPropertyValue("direction"), a.getPropertyPriority("direction")], a.setProperty("direction", t, "important"), e.prevTextDirection = n) },
                        restoreTextDirection: function(e) {
                            var t = e.prevTextDirection;
                            void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
                        }
                    };
                z.easing = N, z.canvas = B, z.options = V, z.math = U, z.rtl = J;
                var G = function(e) { z.extend(this, e), this.initialize.apply(this, arguments) };
                z.extend(G.prototype, {
                    _type: void 0,
                    initialize: function() { this.hidden = !1 },
                    pivot: function() { var e = this; return e._view || (e._view = z.extend({}, e._model)), e._start = {}, e },
                    transition: function(e) {
                        var t = this,
                            a = t._model,
                            n = t._start,
                            r = t._view;
                        return a && 1 !== e ? (r || (r = t._view = {}), n || (n = t._start = {}), function(e, t, a, n) {
                            var r, i, s, o, d, l, u, c, h, _ = Object.keys(a);
                            for (r = 0, i = _.length; r < i; ++r)
                                if (l = a[s = _[r]], t.hasOwnProperty(s) || (t[s] = l), (o = t[s]) !== l && "_" !== s[0]) {
                                    if (e.hasOwnProperty(s) || (e[s] = o), (u = typeof l) == typeof(d = e[s]))
                                        if ("string" === u) { if ((c = L(d)).valid && (h = L(l)).valid) { t[s] = h.mix(c, n).rgbString(); continue } } else if (z.isFinite(d) && z.isFinite(l)) { t[s] = d + (l - d) * n; continue }
                                    t[s] = l
                                }
                        }(n, r, a, e), t) : (t._view = z.extend({}, a), t._start = null, t)
                    },
                    tooltipPosition: function() { return { x: this._model.x, y: this._model.y } },
                    hasValue: function() { return z.isNumber(this._model.x) && z.isNumber(this._model.y) }
                }), G.extend = z.inherits;
                var q = G,
                    K = q.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
                    $ = K;
                Object.defineProperty(K.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(K.prototype, "chartInstance", { get: function() { return this.chart }, set: function(e) { this.chart = e } }), R._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: z.noop, onComplete: z.noop } });
                var Z = {
                        animations: [],
                        request: null,
                        addAnimation: function(e, t, a, n) {
                            var r, i, s = this.animations;
                            for (t.chart = e, t.startTime = Date.now(), t.duration = a, n || (e.animating = !0), r = 0, i = s.length; r < i; ++r)
                                if (s[r].chart === e) return void(s[r] = t);
                            s.push(t), 1 === s.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(e) { var t = z.findIndex(this.animations, (function(t) { return t.chart === e })); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1) },
                        requestAnimationFrame: function() {
                            var e = this;
                            null === e.request && (e.request = z.requestAnimFrame.call(window, (function() { e.request = null, e.startDigest() })))
                        },
                        startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() },
                        advance: function() { for (var e, t, a, n, r = this.animations, i = 0; i < r.length;) t = (e = r[i]).chart, a = e.numSteps, n = Math.floor((Date.now() - e.startTime) / e.duration * a) + 1, e.currentStep = Math.min(n, a), z.callback(e.render, [t, e], t), z.callback(e.onAnimationProgress, [e], t), e.currentStep >= a ? (z.callback(e.onAnimationComplete, [e], t), t.animating = !1, r.splice(i, 1)) : ++i }
                    },
                    X = z.options.resolve,
                    Q = ["push", "pop", "shift", "splice", "unshift"];

                function ee(e, t) {
                    var a = e._chartjs;
                    if (a) {
                        var n = a.listeners,
                            r = n.indexOf(t); - 1 !== r && n.splice(r, 1), n.length > 0 || (Q.forEach((function(t) { delete e[t] })), delete e._chartjs)
                    }
                }
                var te = function(e, t) { this.initialize(e, t) };
                z.extend(te.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                    initialize: function(e, t) {
                        var a = this;
                        a.chart = e, a.index = t, a.linkScales(), a.addElements(), a._type = a.getMeta().type
                    },
                    updateIndex: function(e) { this.index = e },
                    linkScales: function() {
                        var e = this.getMeta(),
                            t = this.chart,
                            a = t.scales,
                            n = this.getDataset(),
                            r = t.options.scales;
                        null !== e.xAxisID && e.xAxisID in a && !n.xAxisID || (e.xAxisID = n.xAxisID || r.xAxes[0].id), null !== e.yAxisID && e.yAxisID in a && !n.yAxisID || (e.yAxisID = n.yAxisID || r.yAxes[0].id)
                    },
                    getDataset: function() { return this.chart.data.datasets[this.index] },
                    getMeta: function() { return this.chart.getDatasetMeta(this.index) },
                    getScaleForId: function(e) { return this.chart.scales[e] },
                    _getValueScaleId: function() { return this.getMeta().yAxisID },
                    _getIndexScaleId: function() { return this.getMeta().xAxisID },
                    _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) },
                    _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) },
                    reset: function() { this._update(!0) },
                    destroy: function() { this._data && ee(this._data, this) },
                    createMetaDataset: function() { var e = this.datasetElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index }) },
                    createMetaData: function(e) { var t = this.dataElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e }) },
                    addElements: function() {
                        var e, t, a = this.getMeta(),
                            n = this.getDataset().data || [],
                            r = a.data;
                        for (e = 0, t = n.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
                        a.dataset = a.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(e) {
                        var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                    },
                    buildOrUpdateElements: function() {
                        var e, t, a = this,
                            n = a.getDataset(),
                            r = n.data || (n.data = []);
                        a._data !== r && (a._data && ee(a._data, a), r && Object.isExtensible(r) && (t = a, (e = r)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), Q.forEach((function(t) {
                            var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                n = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function() {
                                    var t = Array.prototype.slice.call(arguments),
                                        r = n.apply(this, t);
                                    return z.each(e._chartjs.listeners, (function(e) { "function" == typeof e[a] && e[a].apply(e, t) })), r
                                }
                            })
                        })))), a._data = r), a.resyncElements()
                    },
                    _configure: function() { this._config = z.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], { merger: function(e, t, a) { "_meta" !== e && "data" !== e && z._merger(e, t, a) } }) },
                    _update: function(e) { this._configure(), this._cachedDataOpts = null, this.update(e) },
                    update: z.noop,
                    transition: function(e) {
                        for (var t = this.getMeta(), a = t.data || [], n = a.length, r = 0; r < n; ++r) a[r].transition(e);
                        t.dataset && t.dataset.transition(e)
                    },
                    draw: function() {
                        var e = this.getMeta(),
                            t = e.data || [],
                            a = t.length,
                            n = 0;
                        for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw()
                    },
                    getStyle: function(e) {
                        var t, a = this.getMeta(),
                            n = a.dataset;
                        return this._configure(), n && void 0 === e ? t = this._resolveDatasetElementOptions(n || {}) : (e = e || 0, t = this._resolveDataElementOptions(a.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t
                    },
                    _resolveDatasetElementOptions: function(e, t) {
                        var a, n, r, i, s = this,
                            o = s.chart,
                            d = s._config,
                            l = e.custom || {},
                            u = o.options.elements[s.datasetElementType.prototype._type] || {},
                            c = s._datasetElementOptions,
                            h = {},
                            _ = { chart: o, dataset: s.getDataset(), datasetIndex: s.index, hover: t };
                        for (a = 0, n = c.length; a < n; ++a) r = c[a], i = t ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, h[r] = X([l[i], d[i], u[i]], _);
                        return h
                    },
                    _resolveDataElementOptions: function(e, t) {
                        var a = this,
                            n = e && e.custom,
                            r = a._cachedDataOpts;
                        if (r && !n) return r;
                        var i, s, o, d, l = a.chart,
                            u = a._config,
                            c = l.options.elements[a.dataElementType.prototype._type] || {},
                            h = a._dataElementOptions,
                            _ = {},
                            m = { chart: l, dataIndex: t, dataset: a.getDataset(), datasetIndex: a.index },
                            f = { cacheable: !n };
                        if (n = n || {}, z.isArray(h))
                            for (s = 0, o = h.length; s < o; ++s) _[d = h[s]] = X([n[d], u[d], c[d]], m, t, f);
                        else
                            for (s = 0, o = (i = Object.keys(h)).length; s < o; ++s) _[d = i[s]] = X([n[d], u[h[d]], u[d], c[d]], m, t, f);
                        return f.cacheable && (a._cachedDataOpts = Object.freeze(_)), _
                    },
                    removeHoverStyle: function(e) { z.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle },
                    setHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e._index,
                            n = e.custom || {},
                            r = e._model,
                            i = z.getHoverColor;
                        e.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = X([n.hoverBackgroundColor, t.hoverBackgroundColor, i(r.backgroundColor)], void 0, a), r.borderColor = X([n.hoverBorderColor, t.hoverBorderColor, i(r.borderColor)], void 0, a), r.borderWidth = X([n.hoverBorderWidth, t.hoverBorderWidth, r.borderWidth], void 0, a)
                    },
                    _removeDatasetHoverStyle: function() {
                        var e = this.getMeta().dataset;
                        e && this.removeHoverStyle(e)
                    },
                    _setDatasetHoverStyle: function() {
                        var e, t, a, n, r, i, s = this.getMeta().dataset,
                            o = {};
                        if (s) {
                            for (i = s._model, r = this._resolveDatasetElementOptions(s, !0), e = 0, t = (n = Object.keys(r)).length; e < t; ++e) o[a = n[e]] = i[a], i[a] = r[a];
                            s.$previousStyle = o
                        }
                    },
                    resyncElements: function() {
                        var e = this.getMeta(),
                            t = this.getDataset().data,
                            a = e.data.length,
                            n = t.length;
                        n < a ? e.data.splice(n, a - n) : n > a && this.insertElements(a, n - a)
                    },
                    insertElements: function(e, t) { for (var a = 0; a < t; ++a) this.addElementAndReset(e + a) },
                    onDataPush: function() {
                        var e = arguments.length;
                        this.insertElements(this.getDataset().data.length - e, e)
                    },
                    onDataPop: function() { this.getMeta().data.pop() },
                    onDataShift: function() { this.getMeta().data.shift() },
                    onDataSplice: function(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2) },
                    onDataUnshift: function() { this.insertElements(0, arguments.length) }
                }), te.extend = z.inherits;
                var ae = te,
                    ne = 2 * Math.PI;

                function re(e, t) {
                    var a = t.startAngle,
                        n = t.endAngle,
                        r = t.pixelMargin,
                        i = r / t.outerRadius,
                        s = t.x,
                        o = t.y;
                    e.beginPath(), e.arc(s, o, t.outerRadius, a - i, n + i), t.innerRadius > r ? (i = r / t.innerRadius, e.arc(s, o, t.innerRadius - r, n + i, a - i, !0)) : e.arc(s, o, r, n + Math.PI / 2, a - Math.PI / 2), e.closePath(), e.clip()
                }

                function ie(e, t, a) {
                    var n = "inner" === t.borderAlign;
                    n ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), a.fullCircles && function(e, t, a, n) { var r, i = a.endAngle; for (n && (a.endAngle = a.startAngle + ne, re(e, a), a.endAngle = i, a.endAngle === a.startAngle && a.fullCircles && (a.endAngle += ne, a.fullCircles--)), e.beginPath(), e.arc(a.x, a.y, a.innerRadius, a.startAngle + ne, a.startAngle, !0), r = 0; r < a.fullCircles; ++r) e.stroke(); for (e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.startAngle + ne), r = 0; r < a.fullCircles; ++r) e.stroke() }(e, t, a, n), n && re(e, a), e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.stroke()
                }
                R._set("global", { elements: { arc: { backgroundColor: R.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } });
                var se = q.extend({
                        _type: "arc",
                        inLabelRange: function(e) { var t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) },
                        inRange: function(e, t) {
                            var a = this._view;
                            if (a) {
                                for (var n = z.getAngleFromPoint(a, { x: e, y: t }), r = n.angle, i = n.distance, s = a.startAngle, o = a.endAngle; o < s;) o += ne;
                                for (; r > o;) r -= ne;
                                for (; r < s;) r += ne;
                                var d = r >= s && r <= o,
                                    l = i >= a.innerRadius && i <= a.outerRadius;
                                return d && l
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var e = this._view,
                                t = (e.startAngle + e.endAngle) / 2,
                                a = (e.innerRadius + e.outerRadius) / 2;
                            return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a }
                        },
                        getArea: function() { var e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)) },
                        tooltipPosition: function() {
                            var e = this._view,
                                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                                a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                            return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a }
                        },
                        draw: function() {
                            var e, t = this._chart.ctx,
                                a = this._view,
                                n = "inner" === a.borderAlign ? .33 : 0,
                                r = { x: a.x, y: a.y, innerRadius: a.innerRadius, outerRadius: Math.max(a.outerRadius - n, 0), pixelMargin: n, startAngle: a.startAngle, endAngle: a.endAngle, fullCircles: Math.floor(a.circumference / ne) };
                            if (t.save(), t.fillStyle = a.backgroundColor, t.strokeStyle = a.borderColor, r.fullCircles) {
                                for (r.endAngle = r.startAngle + ne, t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), e = 0; e < r.fullCircles; ++e) t.fill();
                                r.endAngle = r.startAngle + a.circumference % ne
                            }
                            t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), t.fill(), a.borderWidth && ie(t, a, r), t.restore()
                        }
                    }),
                    oe = z.valueOrDefault,
                    de = R.global.defaultColor;
                R._set("global", { elements: { line: { tension: .4, backgroundColor: de, borderWidth: 3, borderColor: de, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } });
                var le = q.extend({
                        _type: "line",
                        draw: function() {
                            var e, t, a, n = this,
                                r = n._view,
                                i = n._chart.ctx,
                                s = r.spanGaps,
                                o = n._children.slice(),
                                d = R.global,
                                l = d.elements.line,
                                u = -1,
                                c = n._loop;
                            if (o.length) {
                                if (n._loop) {
                                    for (e = 0; e < o.length; ++e)
                                        if (t = z.previousItem(o, e), !o[e]._view.skip && t._view.skip) { o = o.slice(e).concat(o.slice(0, e)), c = s; break }
                                    c && o.push(o[0])
                                }
                                for (i.save(), i.lineCap = r.borderCapStyle || l.borderCapStyle, i.setLineDash && i.setLineDash(r.borderDash || l.borderDash), i.lineDashOffset = oe(r.borderDashOffset, l.borderDashOffset), i.lineJoin = r.borderJoinStyle || l.borderJoinStyle, i.lineWidth = oe(r.borderWidth, l.borderWidth), i.strokeStyle = r.borderColor || d.defaultColor, i.beginPath(), (a = o[0]._view).skip || (i.moveTo(a.x, a.y), u = 0), e = 1; e < o.length; ++e) a = o[e]._view, t = -1 === u ? z.previousItem(o, e) : o[u], a.skip || (u !== e - 1 && !s || -1 === u ? i.moveTo(a.x, a.y) : z.canvas.lineTo(i, t._view, a), u = e);
                                c && i.closePath(), i.stroke(), i.restore()
                            }
                        }
                    }),
                    ue = z.valueOrDefault,
                    ce = R.global.defaultColor;

                function he(e) { var t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius }
                R._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: ce, borderColor: ce, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } });
                var _e = q.extend({
                        _type: "point",
                        inRange: function(e, t) { var a = this._view; return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2) },
                        inLabelRange: he,
                        inXRange: he,
                        inYRange: function(e) { var t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius },
                        getCenterPoint: function() { var e = this._view; return { x: e.x, y: e.y } },
                        getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) },
                        tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth } },
                        draw: function(e) {
                            var t = this._view,
                                a = this._chart.ctx,
                                n = t.pointStyle,
                                r = t.rotation,
                                i = t.radius,
                                s = t.x,
                                o = t.y,
                                d = R.global,
                                l = d.defaultColor;
                            t.skip || (void 0 === e || z.canvas._isPointInArea(t, e)) && (a.strokeStyle = t.borderColor || l, a.lineWidth = ue(t.borderWidth, d.elements.point.borderWidth), a.fillStyle = t.backgroundColor || l, z.canvas.drawPoint(a, n, i, s, o, r))
                        }
                    }),
                    me = R.global.defaultColor;

                function fe(e) { return e && void 0 !== e.width }

                function pe(e) { var t, a, n, r, i; return fe(e) ? (i = e.width / 2, t = e.x - i, a = e.x + i, n = Math.min(e.y, e.base), r = Math.max(e.y, e.base)) : (i = e.height / 2, t = Math.min(e.x, e.base), a = Math.max(e.x, e.base), n = e.y - i, r = e.y + i), { left: t, top: n, right: a, bottom: r } }

                function ge(e, t, a) { return e === t ? a : e === a ? t : e }

                function ye(e, t, a) {
                    var n, r, i, s, o = e.borderWidth,
                        d = function(e) {
                            var t = e.borderSkipped,
                                a = {};
                            return t ? (e.horizontal ? e.base > e.x && (t = ge(t, "left", "right")) : e.base < e.y && (t = ge(t, "bottom", "top")), a[t] = !0, a) : a
                        }(e);
                    return z.isObject(o) ? (n = +o.top || 0, r = +o.right || 0, i = +o.bottom || 0, s = +o.left || 0) : n = r = i = s = +o || 0, { t: d.top || n < 0 ? 0 : n > a ? a : n, r: d.right || r < 0 ? 0 : r > t ? t : r, b: d.bottom || i < 0 ? 0 : i > a ? a : i, l: d.left || s < 0 ? 0 : s > t ? t : s }
                }

                function Me(e, t, a) {
                    var n = null === t,
                        r = null === a,
                        i = !(!e || n && r) && pe(e);
                    return i && (n || t >= i.left && t <= i.right) && (r || a >= i.top && a <= i.bottom)
                }
                R._set("global", { elements: { rectangle: { backgroundColor: me, borderColor: me, borderSkipped: "bottom", borderWidth: 0 } } });
                var ve = q.extend({
                        _type: "rectangle",
                        draw: function() {
                            var e = this._chart.ctx,
                                t = this._view,
                                a = function(e) {
                                    var t = pe(e),
                                        a = t.right - t.left,
                                        n = t.bottom - t.top,
                                        r = ye(e, a / 2, n / 2);
                                    return { outer: { x: t.left, y: t.top, w: a, h: n }, inner: { x: t.left + r.l, y: t.top + r.t, w: a - r.l - r.r, h: n - r.t - r.b } }
                                }(t),
                                n = a.outer,
                                r = a.inner;
                            e.fillStyle = t.backgroundColor, e.fillRect(n.x, n.y, n.w, n.h), n.w === r.w && n.h === r.h || (e.save(), e.beginPath(), e.rect(n.x, n.y, n.w, n.h), e.clip(), e.fillStyle = t.borderColor, e.rect(r.x, r.y, r.w, r.h), e.fill("evenodd"), e.restore())
                        },
                        height: function() { var e = this._view; return e.base - e.y },
                        inRange: function(e, t) { return Me(this._view, e, t) },
                        inLabelRange: function(e, t) { var a = this._view; return fe(a) ? Me(a, e, null) : Me(a, null, t) },
                        inXRange: function(e) { return Me(this._view, e, null) },
                        inYRange: function(e) { return Me(this._view, null, e) },
                        getCenterPoint: function() { var e, t, a = this._view; return fe(a) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), { x: e, y: t } },
                        getArea: function() { var e = this._view; return fe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base) },
                        tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y } }
                    }),
                    be = {},
                    Le = se,
                    Ye = le,
                    ke = _e,
                    De = ve;
                be.Arc = Le, be.Line = Ye, be.Point = ke, be.Rectangle = De;
                var we = z._deprecated,
                    xe = z.valueOrDefault;

                function Te(e, t, a) {
                    var n, r, i = a.barThickness,
                        s = t.stackCount,
                        o = t.pixels[e],
                        d = z.isNullOrUndef(i) ? function(e, t) { var a, n, r, i, s = e._length; for (r = 1, i = t.length; r < i; ++r) s = Math.min(s, Math.abs(t[r] - t[r - 1])); for (r = 0, i = e.getTicks().length; r < i; ++r) n = e.getPixelForTick(r), s = r > 0 ? Math.min(s, Math.abs(n - a)) : s, a = n; return s }(t.scale, t.pixels) : -1;
                    return z.isNullOrUndef(i) ? (n = d * a.categoryPercentage, r = a.barPercentage) : (n = i * s, r = 1), { chunk: n / s, ratio: r, start: o - n / 2 }
                }
                R._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), R._set("global", { datasets: { bar: { categoryPercentage: .8, barPercentage: .9 } } });
                var Se = ae.extend({
                        dataElementType: be.Rectangle,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                        initialize: function() {
                            var e, t, a = this;
                            ae.prototype.initialize.apply(a, arguments), (e = a.getMeta()).stack = a.getDataset().stack, e.bar = !0, t = a._getIndexScale().options, we("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), we("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), we("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), we("bar chart", a._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), we("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                        },
                        update: function(e) { var t, a, n = this.getMeta().data; for (this._ruler = this.getRuler(), t = 0, a = n.length; t < a; ++t) this.updateElement(n[t], t, e) },
                        updateElement: function(e, t, a) {
                            var n = this,
                                r = n.getMeta(),
                                i = n.getDataset(),
                                s = n._resolveDataElementOptions(e, t);
                            e._xScale = n.getScaleForId(r.xAxisID), e._yScale = n.getScaleForId(r.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = { backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderSkipped: s.borderSkipped, borderWidth: s.borderWidth, datasetLabel: i.label, label: n.chart.data.labels[t] }, z.isArray(i.data[t]) && (e._model.borderSkipped = null), n._updateElementGeometry(e, t, a, s), e.pivot()
                        },
                        _updateElementGeometry: function(e, t, a, n) {
                            var r = this,
                                i = e._model,
                                s = r._getValueScale(),
                                o = s.getBasePixel(),
                                d = s.isHorizontal(),
                                l = r._ruler || r.getRuler(),
                                u = r.calculateBarValuePixels(r.index, t, n),
                                c = r.calculateBarIndexPixels(r.index, t, l, n);
                            i.horizontal = d, i.base = a ? o : u.base, i.x = d ? a ? o : u.head : c.center, i.y = d ? c.center : a ? o : u.head, i.height = d ? c.size : void 0, i.width = d ? void 0 : c.size
                        },
                        _getStacks: function(e) {
                            var t, a, n = this._getIndexScale(),
                                r = n._getMatchingVisibleMetas(this._type),
                                i = n.options.stacked,
                                s = r.length,
                                o = [];
                            for (t = 0; t < s && (a = r[t], (!1 === i || -1 === o.indexOf(a.stack) || void 0 === i && void 0 === a.stack) && o.push(a.stack), a.index !== e); ++t);
                            return o
                        },
                        getStackCount: function() { return this._getStacks().length },
                        getStackIndex: function(e, t) {
                            var a = this._getStacks(e),
                                n = void 0 !== t ? a.indexOf(t) : -1;
                            return -1 === n ? a.length - 1 : n
                        },
                        getRuler: function() {
                            var e, t, a = this._getIndexScale(),
                                n = [];
                            for (e = 0, t = this.getMeta().data.length; e < t; ++e) n.push(a.getPixelForValue(null, e, this.index));
                            return { pixels: n, start: a._startPixel, end: a._endPixel, stackCount: this.getStackCount(), scale: a }
                        },
                        calculateBarValuePixels: function(e, t, a) {
                            var n, r, i, s, o, d, l, u = this.chart,
                                c = this._getValueScale(),
                                h = c.isHorizontal(),
                                _ = u.data.datasets,
                                m = c._getMatchingVisibleMetas(this._type),
                                f = c._parseValue(_[e].data[t]),
                                p = a.minBarLength,
                                g = c.options.stacked,
                                y = this.getMeta().stack,
                                M = void 0 === f.start ? 0 : f.max >= 0 && f.min >= 0 ? f.min : f.max,
                                v = void 0 === f.start ? f.end : f.max >= 0 && f.min >= 0 ? f.max - f.min : f.min - f.max,
                                b = m.length;
                            if (g || void 0 === g && void 0 !== y)
                                for (n = 0; n < b && (r = m[n]).index !== e; ++n) r.stack === y && (i = void 0 === (l = c._parseValue(_[r.index].data[t])).start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min, (f.min < 0 && i < 0 || f.max >= 0 && i > 0) && (M += i));
                            return s = c.getPixelForValue(M), d = (o = c.getPixelForValue(M + v)) - s, void 0 !== p && Math.abs(d) < p && (d = p, o = v >= 0 && !h || v < 0 && h ? s - p : s + p), { size: d, base: s, head: o, center: o + d / 2 }
                        },
                        calculateBarIndexPixels: function(e, t, a, n) {
                            var r = "flex" === n.barThickness ? function(e, t, a) {
                                    var n, r = t.pixels,
                                        i = r[e],
                                        s = e > 0 ? r[e - 1] : null,
                                        o = e < r.length - 1 ? r[e + 1] : null,
                                        d = a.categoryPercentage;
                                    return null === s && (s = i - (null === o ? t.end - t.start : o - i)), null === o && (o = i + i - s), n = i - (i - Math.min(s, o)) / 2 * d, { chunk: Math.abs(o - s) / 2 * d / t.stackCount, ratio: a.barPercentage, start: n }
                                }(t, a, n) : Te(t, a, n),
                                i = this.getStackIndex(e, this.getMeta().stack),
                                s = r.start + r.chunk * i + r.chunk / 2,
                                o = Math.min(xe(n.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                            return { base: s - o / 2, head: s + o / 2, center: s, size: o }
                        },
                        draw: function() {
                            var e = this.chart,
                                t = this._getValueScale(),
                                a = this.getMeta().data,
                                n = this.getDataset(),
                                r = a.length,
                                i = 0;
                            for (z.canvas.clipArea(e.ctx, e.chartArea); i < r; ++i) {
                                var s = t._parseValue(n.data[i]);
                                isNaN(s.min) || isNaN(s.max) || a[i].draw()
                            }
                            z.canvas.unclipArea(e.ctx)
                        },
                        _resolveDataElementOptions: function() {
                            var e = this,
                                t = z.extend({}, ae.prototype._resolveDataElementOptions.apply(e, arguments)),
                                a = e._getIndexScale().options,
                                n = e._getValueScale().options;
                            return t.barPercentage = xe(a.barPercentage, t.barPercentage), t.barThickness = xe(a.barThickness, t.barThickness), t.categoryPercentage = xe(a.categoryPercentage, t.categoryPercentage), t.maxBarThickness = xe(a.maxBarThickness, t.maxBarThickness), t.minBarLength = xe(n.minBarLength, t.minBarLength), t
                        }
                    }),
                    je = z.valueOrDefault,
                    He = z.options.resolve;
                R._set("bubble", {
                    hover: { mode: "single" },
                    scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] },
                    tooltips: {
                        callbacks: {
                            title: function() { return "" },
                            label: function(e, t) {
                                var a = t.datasets[e.datasetIndex].label || "",
                                    n = t.datasets[e.datasetIndex].data[e.index];
                                return a + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                            }
                        }
                    }
                });
                var Pe = ae.extend({
                        dataElementType: be.Point,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                        update: function(e) {
                            var t = this,
                                a = t.getMeta().data;
                            z.each(a, (function(a, n) { t.updateElement(a, n, e) }))
                        },
                        updateElement: function(e, t, a) {
                            var n = this,
                                r = n.getMeta(),
                                i = e.custom || {},
                                s = n.getScaleForId(r.xAxisID),
                                o = n.getScaleForId(r.yAxisID),
                                d = n._resolveDataElementOptions(e, t),
                                l = n.getDataset().data[t],
                                u = n.index,
                                c = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u),
                                h = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                            e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = { backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, hitRadius: d.hitRadius, pointStyle: d.pointStyle, rotation: d.rotation, radius: a ? 0 : d.radius, skip: i.skip || isNaN(c) || isNaN(h), x: c, y: h }, e.pivot()
                        },
                        setHoverStyle: function(e) {
                            var t = e._model,
                                a = e._options,
                                n = z.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = je(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = je(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = je(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
                        },
                        _resolveDataElementOptions: function(e, t) {
                            var a = this,
                                n = a.chart,
                                r = a.getDataset(),
                                i = e.custom || {},
                                s = r.data[t] || {},
                                o = ae.prototype._resolveDataElementOptions.apply(a, arguments),
                                d = { chart: n, dataIndex: t, dataset: r, datasetIndex: a.index };
                            return a._cachedDataOpts === o && (o = z.extend({}, o)), o.radius = He([i.radius, s.r, a._config.radius, n.options.elements.point.radius], d, t), o
                        }
                    }),
                    Oe = z.valueOrDefault,
                    Ae = Math.PI,
                    Ce = 2 * Ae,
                    Re = Ae / 2;
                R._set("doughnut", {
                    animation: { animateRotate: !0, animateScale: !1 },
                    hover: { mode: "single" },
                    legendCallback: function(e) {
                        var t, a, n, r = document.createElement("ul"),
                            i = e.data,
                            s = i.datasets,
                            o = i.labels;
                        if (r.setAttribute("class", e.id + "-legend"), s.length)
                            for (t = 0, a = s[0].data.length; t < a; ++t)(n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[t], o[t] && n.appendChild(document.createTextNode(o[t]));
                        return r.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(e) {
                                var t = e.data;
                                return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                                    var r = e.getDatasetMeta(0),
                                        i = r.controller.getStyle(n);
                                    return { text: a, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden, index: n }
                                })) : []
                            }
                        },
                        onClick: function(e, t) {
                            var a, n, r, i = t.index,
                                s = this.chart;
                            for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(r = s.getDatasetMeta(a)).data[i] && (r.data[i].hidden = !r.data[i].hidden);
                            s.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: -Re,
                    circumference: Ce,
                    tooltips: {
                        callbacks: {
                            title: function() { return "" },
                            label: function(e, t) {
                                var a = t.labels[e.index],
                                    n = ": " + t.datasets[e.datasetIndex].data[e.index];
                                return z.isArray(a) ? (a = a.slice())[0] += n : a += n, a
                            }
                        }
                    }
                });
                var Fe = ae.extend({
                    dataElementType: be.Arc,
                    linkScales: z.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    getRingIndex: function(e) { for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t; return t },
                    update: function(e) {
                        var t, a, n, r, i = this,
                            s = i.chart,
                            o = s.chartArea,
                            d = s.options,
                            l = 1,
                            u = 1,
                            c = 0,
                            h = 0,
                            _ = i.getMeta(),
                            m = _.data,
                            f = d.cutoutPercentage / 100 || 0,
                            p = d.circumference,
                            g = i._getRingWeight(i.index);
                        if (p < Ce) {
                            var y = d.rotation % Ce,
                                M = (y += y >= Ae ? -Ce : y < -Ae ? Ce : 0) + p,
                                v = Math.cos(y),
                                b = Math.sin(y),
                                L = Math.cos(M),
                                Y = Math.sin(M),
                                k = y <= 0 && M >= 0 || M >= Ce,
                                D = y <= Re && M >= Re || M >= Ce + Re,
                                w = y <= -Re && M >= -Re || M >= Ae + Re,
                                x = y === -Ae || M >= Ae ? -1 : Math.min(v, v * f, L, L * f),
                                T = w ? -1 : Math.min(b, b * f, Y, Y * f),
                                S = k ? 1 : Math.max(v, v * f, L, L * f),
                                j = D ? 1 : Math.max(b, b * f, Y, Y * f);
                            l = (S - x) / 2, u = (j - T) / 2, c = -(S + x) / 2, h = -(j + T) / 2
                        }
                        for (n = 0, r = m.length; n < r; ++n) m[n]._options = i._resolveDataElementOptions(m[n], n);
                        for (s.borderWidth = i.getMaxBorderWidth(), t = (o.right - o.left - s.borderWidth) / l, a = (o.bottom - o.top - s.borderWidth) / u, s.outerRadius = Math.max(Math.min(t, a) / 2, 0), s.innerRadius = Math.max(s.outerRadius * f, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), s.offsetX = c * s.outerRadius, s.offsetY = h * s.outerRadius, _.total = i.calculateTotal(), i.outerRadius = s.outerRadius - s.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - s.radiusLength * g, 0), n = 0, r = m.length; n < r; ++n) i.updateElement(m[n], n, e)
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            r = n.chart,
                            i = r.chartArea,
                            s = r.options,
                            o = s.animation,
                            d = (i.left + i.right) / 2,
                            l = (i.top + i.bottom) / 2,
                            u = s.rotation,
                            c = s.rotation,
                            h = n.getDataset(),
                            _ = a && o.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (s.circumference / Ce),
                            m = a && o.animateScale ? 0 : n.innerRadius,
                            f = a && o.animateScale ? 0 : n.outerRadius,
                            p = e._options || {};
                        z.extend(e, { _datasetIndex: n.index, _index: t, _model: { backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, borderAlign: p.borderAlign, x: d + r.offsetX, y: l + r.offsetY, startAngle: u, endAngle: c, circumference: _, outerRadius: f, innerRadius: m, label: z.valueAtIndexOrDefault(h.label, t, r.data.labels[t]) } });
                        var g = e._model;
                        a && o.animateRotate || (g.startAngle = 0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), e.pivot()
                    },
                    calculateTotal: function() {
                        var e, t = this.getDataset(),
                            a = this.getMeta(),
                            n = 0;
                        return z.each(a.data, (function(a, r) { e = t.data[r], isNaN(e) || a.hidden || (n += Math.abs(e)) })), n
                    },
                    calculateCircumference: function(e) { var t = this.getMeta().total; return t > 0 && !isNaN(e) ? Ce * (Math.abs(e) / t) : 0 },
                    getMaxBorderWidth: function(e) {
                        var t, a, n, r, i, s, o, d, l = 0,
                            u = this.chart;
                        if (!e)
                            for (t = 0, a = u.data.datasets.length; t < a; ++t)
                                if (u.isDatasetVisible(t)) { e = (n = u.getDatasetMeta(t)).data, t !== this.index && (i = n.controller); break }
                        if (!e) return 0;
                        for (t = 0, a = e.length; t < a; ++t) r = e[t], i ? (i._configure(), s = i._resolveDataElementOptions(r, t)) : s = r._options, "inner" !== s.borderAlign && (o = s.borderWidth, l = (d = s.hoverBorderWidth) > (l = o > l ? o : l) ? d : l);
                        return l
                    },
                    setHoverStyle: function(e) {
                        var t = e._model,
                            a = e._options,
                            n = z.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = Oe(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = Oe(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = Oe(a.hoverBorderWidth, a.borderWidth)
                    },
                    _getRingWeightOffset: function(e) { for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && (t += this._getRingWeight(a)); return t },
                    _getRingWeight: function(e) { return Math.max(Oe(this.chart.data.datasets[e].weight, 1), 0) },
                    _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) }
                });
                R._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }), R._set("global", { datasets: { horizontalBar: { categoryPercentage: .8, barPercentage: .9 } } });
                var We = Se.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
                    Ee = z.valueOrDefault,
                    Ie = z.options.resolve,
                    ze = z.canvas._isPointInArea;

                function Ne(e, t) {
                    var a = e && e.options.ticks || {},
                        n = a.reverse,
                        r = void 0 === a.min ? t : 0,
                        i = void 0 === a.max ? t : 0;
                    return { start: n ? i : r, end: n ? r : i }
                }

                function Be(e, t, a) {
                    var n = a / 2,
                        r = Ne(e, n),
                        i = Ne(t, n);
                    return { top: i.end, right: r.end, bottom: i.start, left: r.start }
                }

                function Ve(e) { var t, a, n, r; return z.isObject(e) ? (t = e.top, a = e.right, n = e.bottom, r = e.left) : t = a = n = r = e, { top: t, right: a, bottom: n, left: r } }
                R._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } });
                var Ue = ae.extend({
                        datasetElementType: be.Line,
                        dataElementType: be.Point,
                        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                        _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                        update: function(e) {
                            var t, a, n = this,
                                r = n.getMeta(),
                                i = r.dataset,
                                s = r.data || [],
                                o = n.chart.options,
                                d = n._config,
                                l = n._showLine = Ee(d.showLine, o.showLines);
                            for (n._xScale = n.getScaleForId(r.xAxisID), n._yScale = n.getScaleForId(r.yAxisID), l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = n._yScale, i._datasetIndex = n.index, i._children = s, i._model = n._resolveDatasetElementOptions(i), i.pivot()), t = 0, a = s.length; t < a; ++t) n.updateElement(s[t], t, e);
                            for (l && 0 !== i._model.tension && n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t) s[t].pivot()
                        },
                        updateElement: function(e, t, a) {
                            var n, r, i = this,
                                s = i.getMeta(),
                                o = e.custom || {},
                                d = i.getDataset(),
                                l = i.index,
                                u = d.data[t],
                                c = i._xScale,
                                h = i._yScale,
                                _ = s.dataset._model,
                                m = i._resolveDataElementOptions(e, t);
                            n = c.getPixelForValue("object" == typeof u ? u : NaN, t, l), r = a ? h.getBasePixel() : i.calculatePointY(u, t, l), e._xScale = c, e._yScale = h, e._options = m, e._datasetIndex = l, e._index = t, e._model = { x: n, y: r, skip: o.skip || isNaN(n) || isNaN(r), radius: m.radius, pointStyle: m.pointStyle, rotation: m.rotation, backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, tension: Ee(o.tension, _ ? _.tension : 0), steppedLine: !!_ && _.steppedLine, hitRadius: m.hitRadius }
                        },
                        _resolveDatasetElementOptions: function(e) {
                            var t = this,
                                a = t._config,
                                n = e.custom || {},
                                r = t.chart.options,
                                i = r.elements.line,
                                s = ae.prototype._resolveDatasetElementOptions.apply(t, arguments);
                            return s.spanGaps = Ee(a.spanGaps, r.spanGaps), s.tension = Ee(a.lineTension, i.tension), s.steppedLine = Ie([n.steppedLine, a.steppedLine, i.stepped]), s.clip = Ve(Ee(a.clip, Be(t._xScale, t._yScale, s.borderWidth))), s
                        },
                        calculatePointY: function(e, t, a) {
                            var n, r, i, s, o, d, l, u = this.chart,
                                c = this._yScale,
                                h = 0,
                                _ = 0;
                            if (c.options.stacked) { for (o = +c.getRightValue(e), l = (d = u._getSortedVisibleDatasetMetas()).length, n = 0; n < l && (i = d[n]).index !== a; ++n) r = u.data.datasets[i.index], "line" === i.type && i.yAxisID === c.id && ((s = +c.getRightValue(r.data[t])) < 0 ? _ += s || 0 : h += s || 0); return o < 0 ? c.getPixelForValue(_ + o) : c.getPixelForValue(h + o) }
                            return c.getPixelForValue(e)
                        },
                        updateBezierControlPoints: function() {
                            var e, t, a, n, r = this.chart,
                                i = this.getMeta(),
                                s = i.dataset._model,
                                o = r.chartArea,
                                d = i.data || [];

                            function l(e, t, a) { return Math.max(Math.min(e, a), t) }
                            if (s.spanGaps && (d = d.filter((function(e) { return !e._model.skip }))), "monotone" === s.cubicInterpolationMode) z.splineCurveMonotone(d);
                            else
                                for (e = 0, t = d.length; e < t; ++e) a = d[e]._model, n = z.splineCurve(z.previousItem(d, e)._model, a, z.nextItem(d, e)._model, s.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                            if (r.options.elements.line.capBezierPoints)
                                for (e = 0, t = d.length; e < t; ++e) a = d[e]._model, ze(a, o) && (e > 0 && ze(d[e - 1]._model, o) && (a.controlPointPreviousX = l(a.controlPointPreviousX, o.left, o.right), a.controlPointPreviousY = l(a.controlPointPreviousY, o.top, o.bottom)), e < d.length - 1 && ze(d[e + 1]._model, o) && (a.controlPointNextX = l(a.controlPointNextX, o.left, o.right), a.controlPointNextY = l(a.controlPointNextY, o.top, o.bottom)))
                        },
                        draw: function() {
                            var e, t = this.chart,
                                a = this.getMeta(),
                                n = a.data || [],
                                r = t.chartArea,
                                i = t.canvas,
                                s = 0,
                                o = n.length;
                            for (this._showLine && (e = a.dataset._model.clip, z.canvas.clipArea(t.ctx, { left: !1 === e.left ? 0 : r.left - e.left, right: !1 === e.right ? i.width : r.right + e.right, top: !1 === e.top ? 0 : r.top - e.top, bottom: !1 === e.bottom ? i.height : r.bottom + e.bottom }), a.dataset.draw(), z.canvas.unclipArea(t.ctx)); s < o; ++s) n[s].draw(r)
                        },
                        setHoverStyle: function(e) {
                            var t = e._model,
                                a = e._options,
                                n = z.getHoverColor;
                            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Ee(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = Ee(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = Ee(a.hoverBorderWidth, a.borderWidth), t.radius = Ee(a.hoverRadius, a.radius)
                        }
                    }),
                    Je = z.options.resolve;
                R._set("polarArea", {
                    scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } },
                    animation: { animateRotate: !0, animateScale: !0 },
                    startAngle: -.5 * Math.PI,
                    legendCallback: function(e) {
                        var t, a, n, r = document.createElement("ul"),
                            i = e.data,
                            s = i.datasets,
                            o = i.labels;
                        if (r.setAttribute("class", e.id + "-legend"), s.length)
                            for (t = 0, a = s[0].data.length; t < a; ++t)(n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[t], o[t] && n.appendChild(document.createTextNode(o[t]));
                        return r.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(e) {
                                var t = e.data;
                                return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                                    var r = e.getDatasetMeta(0),
                                        i = r.controller.getStyle(n);
                                    return { text: a, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden, index: n }
                                })) : []
                            }
                        },
                        onClick: function(e, t) {
                            var a, n, r, i = t.index,
                                s = this.chart;
                            for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(r = s.getDatasetMeta(a)).data[i].hidden = !r.data[i].hidden;
                            s.update()
                        }
                    },
                    tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return t.labels[e.index] + ": " + e.yLabel } } }
                });
                var Ge = ae.extend({
                    dataElementType: be.Arc,
                    linkScales: z.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    _getIndexScaleId: function() { return this.chart.scale.id },
                    _getValueScaleId: function() { return this.chart.scale.id },
                    update: function(e) {
                        var t, a, n, r = this,
                            i = r.getDataset(),
                            s = r.getMeta(),
                            o = r.chart.options.startAngle || 0,
                            d = r._starts = [],
                            l = r._angles = [],
                            u = s.data;
                        for (r._updateRadius(), s.count = r.countVisibleElements(), t = 0, a = i.data.length; t < a; t++) d[t] = o, n = r._computeAngle(t), l[t] = n, o += n;
                        for (t = 0, a = u.length; t < a; ++t) u[t]._options = r._resolveDataElementOptions(u[t], t), r.updateElement(u[t], t, e)
                    },
                    _updateRadius: function() {
                        var e = this,
                            t = e.chart,
                            a = t.chartArea,
                            n = t.options,
                            r = Math.min(a.right - a.left, a.bottom - a.top);
                        t.outerRadius = Math.max(r / 2, 0), t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            r = n.chart,
                            i = n.getDataset(),
                            s = r.options,
                            o = s.animation,
                            d = r.scale,
                            l = r.data.labels,
                            u = d.xCenter,
                            c = d.yCenter,
                            h = s.startAngle,
                            _ = e.hidden ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
                            m = n._starts[t],
                            f = m + (e.hidden ? 0 : n._angles[t]),
                            p = o.animateScale ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
                            g = e._options || {};
                        z.extend(e, { _datasetIndex: n.index, _index: t, _scale: d, _model: { backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, borderAlign: g.borderAlign, x: u, y: c, innerRadius: 0, outerRadius: a ? p : _, startAngle: a && o.animateRotate ? h : m, endAngle: a && o.animateRotate ? h : f, label: z.valueAtIndexOrDefault(l, t, l[t]) } }), e.pivot()
                    },
                    countVisibleElements: function() {
                        var e = this.getDataset(),
                            t = this.getMeta(),
                            a = 0;
                        return z.each(t.data, (function(t, n) { isNaN(e.data[n]) || t.hidden || a++ })), a
                    },
                    setHoverStyle: function(e) {
                        var t = e._model,
                            a = e._options,
                            n = z.getHoverColor,
                            r = z.valueOrDefault;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = r(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = r(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = r(a.hoverBorderWidth, a.borderWidth)
                    },
                    _computeAngle: function(e) {
                        var t = this,
                            a = this.getMeta().count,
                            n = t.getDataset(),
                            r = t.getMeta();
                        if (isNaN(n.data[e]) || r.data[e].hidden) return 0;
                        var i = { chart: t.chart, dataIndex: e, dataset: n, datasetIndex: t.index };
                        return Je([t.chart.options.elements.arc.angle, 2 * Math.PI / a], i, e)
                    }
                });
                R._set("pie", z.clone(R.doughnut)), R._set("pie", { cutoutPercentage: 0 });
                var qe = Fe,
                    Ke = z.valueOrDefault;
                R._set("radar", { spanGaps: !1, scale: { type: "radialLinear" }, elements: { line: { fill: "start", tension: 0 } } });
                var $e = ae.extend({
                    datasetElementType: be.Line,
                    dataElementType: be.Point,
                    linkScales: z.noop,
                    _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                    _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                    _getIndexScaleId: function() { return this.chart.scale.id },
                    _getValueScaleId: function() { return this.chart.scale.id },
                    update: function(e) {
                        var t, a, n = this,
                            r = n.getMeta(),
                            i = r.dataset,
                            s = r.data || [],
                            o = n.chart.scale,
                            d = n._config;
                        for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = o, i._datasetIndex = n.index, i._children = s, i._loop = !0, i._model = n._resolveDatasetElementOptions(i), i.pivot(), t = 0, a = s.length; t < a; ++t) n.updateElement(s[t], t, e);
                        for (n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t) s[t].pivot()
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            r = e.custom || {},
                            i = n.getDataset(),
                            s = n.chart.scale,
                            o = s.getPointPositionForValue(t, i.data[t]),
                            d = n._resolveDataElementOptions(e, t),
                            l = n.getMeta().dataset._model,
                            u = a ? s.xCenter : o.x,
                            c = a ? s.yCenter : o.y;
                        e._scale = s, e._options = d, e._datasetIndex = n.index, e._index = t, e._model = { x: u, y: c, skip: r.skip || isNaN(u) || isNaN(c), radius: d.radius, pointStyle: d.pointStyle, rotation: d.rotation, backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, tension: Ke(r.tension, l ? l.tension : 0), hitRadius: d.hitRadius }
                    },
                    _resolveDatasetElementOptions: function() {
                        var e = this,
                            t = e._config,
                            a = e.chart.options,
                            n = ae.prototype._resolveDatasetElementOptions.apply(e, arguments);
                        return n.spanGaps = Ke(t.spanGaps, a.spanGaps), n.tension = Ke(t.lineTension, a.elements.line.tension), n
                    },
                    updateBezierControlPoints: function() {
                        var e, t, a, n, r = this.getMeta(),
                            i = this.chart.chartArea,
                            s = r.data || [];

                        function o(e, t, a) { return Math.max(Math.min(e, a), t) }
                        for (r.dataset._model.spanGaps && (s = s.filter((function(e) { return !e._model.skip }))), e = 0, t = s.length; e < t; ++e) a = s[e]._model, n = z.splineCurve(z.previousItem(s, e, !0)._model, a, z.nextItem(s, e, !0)._model, a.tension), a.controlPointPreviousX = o(n.previous.x, i.left, i.right), a.controlPointPreviousY = o(n.previous.y, i.top, i.bottom), a.controlPointNextX = o(n.next.x, i.left, i.right), a.controlPointNextY = o(n.next.y, i.top, i.bottom)
                    },
                    setHoverStyle: function(e) {
                        var t = e._model,
                            a = e._options,
                            n = z.getHoverColor;
                        e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Ke(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = Ke(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = Ke(a.hoverBorderWidth, a.borderWidth), t.radius = Ke(a.hoverRadius, a.radius)
                    }
                });
                R._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(e) { return "(" + e.xLabel + ", " + e.yLabel + ")" } } } }), R._set("global", { datasets: { scatter: { showLine: !1 } } });
                var Ze = { bar: Se, bubble: Pe, doughnut: Fe, horizontalBar: We, line: Ue, polarArea: Ge, pie: qe, radar: $e, scatter: Ue };

                function Xe(e, t) { return e.native ? { x: e.x, y: e.y } : z.getRelativePosition(e, t) }

                function Qe(e, t) {
                    var a, n, r, i, s, o, d = e._getSortedVisibleDatasetMetas();
                    for (n = 0, i = d.length; n < i; ++n)
                        for (r = 0, s = (a = d[n].data).length; r < s; ++r)(o = a[r])._view.skip || t(o)
                }

                function et(e, t) { var a = []; return Qe(e, (function(e) { e.inRange(t.x, t.y) && a.push(e) })), a }

                function tt(e, t, a, n) {
                    var r = Number.POSITIVE_INFINITY,
                        i = [];
                    return Qe(e, (function(e) {
                        if (!a || e.inRange(t.x, t.y)) {
                            var s = e.getCenterPoint(),
                                o = n(t, s);
                            o < r ? (i = [e], r = o) : o === r && i.push(e)
                        }
                    })), i
                }

                function at(e) {
                    var t = -1 !== e.indexOf("x"),
                        a = -1 !== e.indexOf("y");
                    return function(e, n) {
                        var r = t ? Math.abs(e.x - n.x) : 0,
                            i = a ? Math.abs(e.y - n.y) : 0;
                        return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
                    }
                }

                function nt(e, t, a) {
                    var n = Xe(t, e);
                    a.axis = a.axis || "x";
                    var r = at(a.axis),
                        i = a.intersect ? et(e, n) : tt(e, n, !1, r),
                        s = [];
                    return i.length ? (e._getSortedVisibleDatasetMetas().forEach((function(e) {
                        var t = e.data[i[0]._index];
                        t && !t._view.skip && s.push(t)
                    })), s) : []
                }
                var rt = {
                        modes: {
                            single: function(e, t) {
                                var a = Xe(t, e),
                                    n = [];
                                return Qe(e, (function(e) { if (e.inRange(a.x, a.y)) return n.push(e), n })), n.slice(0, 1)
                            },
                            label: nt,
                            index: nt,
                            dataset: function(e, t, a) {
                                var n = Xe(t, e);
                                a.axis = a.axis || "xy";
                                var r = at(a.axis),
                                    i = a.intersect ? et(e, n) : tt(e, n, !1, r);
                                return i.length > 0 && (i = e.getDatasetMeta(i[0]._datasetIndex).data), i
                            },
                            "x-axis": function(e, t) { return nt(e, t, { intersect: !1 }) },
                            point: function(e, t) { return et(e, Xe(t, e)) },
                            nearest: function(e, t, a) {
                                var n = Xe(t, e);
                                a.axis = a.axis || "xy";
                                var r = at(a.axis);
                                return tt(e, n, a.intersect, r)
                            },
                            x: function(e, t, a) {
                                var n = Xe(t, e),
                                    r = [],
                                    i = !1;
                                return Qe(e, (function(e) { e.inXRange(n.x) && r.push(e), e.inRange(n.x, n.y) && (i = !0) })), a.intersect && !i && (r = []), r
                            },
                            y: function(e, t, a) {
                                var n = Xe(t, e),
                                    r = [],
                                    i = !1;
                                return Qe(e, (function(e) { e.inYRange(n.y) && r.push(e), e.inRange(n.x, n.y) && (i = !0) })), a.intersect && !i && (r = []), r
                            }
                        }
                    },
                    it = z.extend;

                function st(e, t) { return z.where(e, (function(e) { return e.pos === t })) }

                function ot(e, t) {
                    return e.sort((function(e, a) {
                        var n = t ? a : e,
                            r = t ? e : a;
                        return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
                    }))
                }

                function dt(e, t, a, n) { return Math.max(e[a], t[a]) + Math.max(e[n], t[n]) }

                function lt(e, t, a) {
                    var n, r, i = a.box,
                        s = e.maxPadding;
                    if (a.size && (e[a.pos] -= a.size), a.size = a.horizontal ? i.height : i.width, e[a.pos] += a.size, i.getPadding) {
                        var o = i.getPadding();
                        s.top = Math.max(s.top, o.top), s.left = Math.max(s.left, o.left), s.bottom = Math.max(s.bottom, o.bottom), s.right = Math.max(s.right, o.right)
                    }
                    if (n = t.outerWidth - dt(s, e, "left", "right"), r = t.outerHeight - dt(s, e, "top", "bottom"), n !== e.w || r !== e.h) return e.w = n, e.h = r, a.horizontal ? n !== e.w : r !== e.h
                }

                function ut(e, t) {
                    var a = t.maxPadding;

                    function n(e) { var n = { left: 0, top: 0, right: 0, bottom: 0 }; return e.forEach((function(e) { n[e] = Math.max(t[e], a[e]) })), n }
                    return n(e ? ["left", "right"] : ["top", "bottom"])
                }

                function ct(e, t, a) { var n, r, i, s, o, d, l = []; for (n = 0, r = e.length; n < r; ++n)(s = (i = e[n]).box).update(i.width || t.w, i.height || t.h, ut(i.horizontal, t)), lt(t, a, i) && (d = !0, l.length && (o = !0)), s.fullWidth || l.push(i); return o && ct(l, t, a) || d }

                function ht(e, t, a) {
                    var n, r, i, s, o = a.padding,
                        d = t.x,
                        l = t.y;
                    for (n = 0, r = e.length; n < r; ++n) s = (i = e[n]).box, i.horizontal ? (s.left = s.fullWidth ? o.left : t.left, s.right = s.fullWidth ? a.outerWidth - o.right : t.left + t.w, s.top = l, s.bottom = l + s.height, s.width = s.right - s.left, l = s.bottom) : (s.left = d, s.right = d + s.width, s.top = t.top, s.bottom = t.top + t.h, s.height = s.bottom - s.top, d = s.right);
                    t.x = d, t.y = l
                }
                R._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });
                var _t, mt = {
                        defaults: {},
                        addBox: function(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() { return [{ z: 0, draw: function() { t.draw.apply(t, arguments) } }] }, e.boxes.push(t) },
                        removeBox: function(e, t) { var a = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== a && e.boxes.splice(a, 1) },
                        configure: function(e, t, a) { for (var n, r = ["fullWidth", "position", "weight"], i = r.length, s = 0; s < i; ++s) n = r[s], a.hasOwnProperty(n) && (t[n] = a[n]) },
                        update: function(e, t, a) {
                            if (e) {
                                var n = e.options.layout || {},
                                    r = z.options.toPadding(n.padding),
                                    i = t - r.width,
                                    s = a - r.height,
                                    o = function(e) {
                                        var t = function(e) { var t, a, n, r = []; for (t = 0, a = (e || []).length; t < a; ++t) n = e[t], r.push({ index: t, box: n, pos: n.position, horizontal: n.isHorizontal(), weight: n.weight }); return r }(e),
                                            a = ot(st(t, "left"), !0),
                                            n = ot(st(t, "right")),
                                            r = ot(st(t, "top"), !0),
                                            i = ot(st(t, "bottom"));
                                        return { leftAndTop: a.concat(r), rightAndBottom: n.concat(i), chartArea: st(t, "chartArea"), vertical: a.concat(n), horizontal: r.concat(i) }
                                    }(e.boxes),
                                    d = o.vertical,
                                    l = o.horizontal,
                                    u = Object.freeze({ outerWidth: t, outerHeight: a, padding: r, availableWidth: i, vBoxMaxWidth: i / 2 / d.length, hBoxMaxHeight: s / 2 }),
                                    c = it({ maxPadding: it({}, r), w: i, h: s, x: r.left, y: r.top }, r);
                                ! function(e, t) { var a, n, r; for (a = 0, n = e.length; a < n; ++a)(r = e[a]).width = r.horizontal ? r.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, r.height = r.horizontal && t.hBoxMaxHeight }(d.concat(l), u), ct(d, c, u), ct(l, c, u) && ct(d, c, u),
                                    function(e) {
                                        var t = e.maxPadding;

                                        function a(a) { var n = Math.max(t[a] - e[a], 0); return e[a] += n, n }
                                        e.y += a("top"), e.x += a("left"), a("right"), a("bottom")
                                    }(c), ht(o.leftAndTop, c, u), c.x += c.w, c.y += c.h, ht(o.rightAndBottom, c, u), e.chartArea = { left: c.left, top: c.top, right: c.left + c.w, bottom: c.top + c.h }, z.each(o.chartArea, (function(t) {
                                        var a = t.box;
                                        it(a, e.chartArea), a.update(c.w, c.h)
                                    }))
                            }
                        }
                    },
                    ft = (_t = Object.freeze({ __proto__: null, default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && _t.default || _t,
                    pt = ["animationstart", "webkitAnimationStart"],
                    gt = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

                function yt(e, t) {
                    var a = z.getStyle(e, t),
                        n = a && a.match(/^(\d+)(\.\d+)?px$/);
                    return n ? Number(n[1]) : void 0
                }
                var Mt = !! function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        window.addEventListener("e", null, t)
                    } catch (a) {}
                    return e
                }() && { passive: !0 };

                function vt(e, t, a) { e.addEventListener(t, a, Mt) }

                function bt(e, t, a) { e.removeEventListener(t, a, Mt) }

                function Lt(e, t, a, n, r) { return { type: e, chart: t, native: r || null, x: void 0 !== a ? a : null, y: void 0 !== n ? n : null } }

                function Yt(e) { var t = document.createElement("div"); return t.className = e || "", t }

                function kt(e, t, a) {
                    var n, r, i, s, o = e.$chartjs || (e.$chartjs = {}),
                        d = o.resizer = function(e) {
                            var t = Yt("chartjs-size-monitor"),
                                a = Yt("chartjs-size-monitor-expand"),
                                n = Yt("chartjs-size-monitor-shrink");
                            a.appendChild(Yt()), n.appendChild(Yt()), t.appendChild(a), t.appendChild(n), t._reset = function() { a.scrollLeft = 1e6, a.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6 };
                            var r = function() { t._reset(), e() };
                            return vt(a, "scroll", r.bind(a, "expand")), vt(n, "scroll", r.bind(n, "shrink")), t
                        }((n = function() {
                            if (o.resizer) {
                                var n = a.options.maintainAspectRatio && e.parentNode,
                                    r = n ? n.clientWidth : 0;
                                t(Lt("resize", a)), n && n.clientWidth < r && a.canvas && t(Lt("resize", a))
                            }
                        }, i = !1, s = [], function() { s = Array.prototype.slice.call(arguments), r = r || this, i || (i = !0, z.requestAnimFrame.call(window, (function() { i = !1, n.apply(r, s) }))) }));
                    ! function(e, t) {
                        var a = e.$chartjs || (e.$chartjs = {}),
                            n = a.renderProxy = function(e) { "chartjs-render-animation" === e.animationName && t() };
                        z.each(pt, (function(t) { vt(e, t, n) })), a.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor")
                    }(e, (function() {
                        if (o.resizer) {
                            var t = e.parentNode;
                            t && t !== d.parentNode && t.insertBefore(d, t.firstChild), d._reset()
                        }
                    }))
                }

                function Dt(e) {
                    var t = e.$chartjs || {},
                        a = t.resizer;
                    delete t.resizer,
                        function(e) {
                            var t = e.$chartjs || {},
                                a = t.renderProxy;
                            a && (z.each(pt, (function(t) { bt(e, t, a) })), delete t.renderProxy), e.classList.remove("chartjs-render-monitor")
                        }(e), a && a.parentNode && a.parentNode.removeChild(a)
                }
                var wt = {
                    disableCSSInjection: !1,
                    _enabled: "undefined" != typeof window && "undefined" != typeof document,
                    _ensureLoaded: function(e) {
                        if (!this.disableCSSInjection) {
                            var t = e.getRootNode ? e.getRootNode() : document;
                            ! function(e, t) {
                                var a = e.$chartjs || (e.$chartjs = {});
                                if (!a.containsStyles) {
                                    a.containsStyles = !0, t = "/* Chart.js */\n" + t;
                                    var n = document.createElement("style");
                                    n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(t)), e.appendChild(n)
                                }
                            }(t.host ? t : document.head, ft)
                        }
                    },
                    acquireContext: function(e, t) {
                        "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                        var a = e && e.getContext && e.getContext("2d");
                        return a && a.canvas === e ? (this._ensureLoaded(e), function(e, t) {
                            var a = e.style,
                                n = e.getAttribute("height"),
                                r = e.getAttribute("width");
                            if (e.$chartjs = { initial: { height: n, width: r, style: { display: a.display, height: a.height, width: a.width } } }, a.display = a.display || "block", null === r || "" === r) {
                                var i = yt(e, "width");
                                void 0 !== i && (e.width = i)
                            }
                            if (null === n || "" === n)
                                if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                                else {
                                    var s = yt(e, "height");
                                    void 0 !== i && (e.height = s)
                                }
                        }(e, t), a) : null
                    },
                    releaseContext: function(e) {
                        var t = e.canvas;
                        if (t.$chartjs) {
                            var a = t.$chartjs.initial;
                            ["height", "width"].forEach((function(e) {
                                var n = a[e];
                                z.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
                            })), z.each(a.style || {}, (function(e, a) { t.style[a] = e })), t.width = t.width, delete t.$chartjs
                        }
                    },
                    addEventListener: function(e, t, a) {
                        var n = e.canvas;
                        if ("resize" !== t) {
                            var r = a.$chartjs || (a.$chartjs = {});
                            vt(n, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) {
                                a(function(e, t) {
                                    var a = gt[e.type] || e.type,
                                        n = z.getRelativePosition(e, t);
                                    return Lt(a, t, n.x, n.y, e)
                                }(t, e))
                            })
                        } else kt(n, a, e)
                    },
                    removeEventListener: function(e, t, a) {
                        var n = e.canvas;
                        if ("resize" !== t) {
                            var r = ((a.$chartjs || {}).proxies || {})[e.id + "_" + t];
                            r && bt(n, t, r)
                        } else Dt(n)
                    }
                };
                z.addEvent = vt, z.removeEvent = bt;
                var xt = wt._enabled ? wt : { acquireContext: function(e) { return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null } },
                    Tt = z.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, xt);
                R._set("global", { plugins: {} });
                var St = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(e) {
                            var t = this._plugins;
                            [].concat(e).forEach((function(e) {-1 === t.indexOf(e) && t.push(e) })), this._cacheId++
                        },
                        unregister: function(e) {
                            var t = this._plugins;
                            [].concat(e).forEach((function(e) { var a = t.indexOf(e); - 1 !== a && t.splice(a, 1) })), this._cacheId++
                        },
                        clear: function() { this._plugins = [], this._cacheId++ },
                        count: function() { return this._plugins.length },
                        getAll: function() { return this._plugins },
                        notify: function(e, t, a) {
                            var n, r, i, s, o, d = this.descriptors(e),
                                l = d.length;
                            for (n = 0; n < l; ++n)
                                if ("function" == typeof(o = (i = (r = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(r.options), !1 === o.apply(i, s))) return !1;
                            return !0
                        },
                        descriptors: function(e) {
                            var t = e.$plugins || (e.$plugins = {});
                            if (t.id === this._cacheId) return t.descriptors;
                            var a = [],
                                n = [],
                                r = e && e.config || {},
                                i = r.options && r.options.plugins || {};
                            return this._plugins.concat(r.plugins || []).forEach((function(e) {
                                if (-1 === a.indexOf(e)) {
                                    var t = e.id,
                                        r = i[t];
                                    !1 !== r && (!0 === r && (r = z.clone(R.global.plugins[t])), a.push(e), n.push({ plugin: e, options: r || {} }))
                                }
                            })), t.descriptors = n, t.id = this._cacheId, n
                        },
                        _invalidate: function(e) { delete e.$plugins }
                    },
                    jt = { constructors: {}, defaults: {}, registerScaleType: function(e, t, a) { this.constructors[e] = t, this.defaults[e] = z.clone(a) }, getScaleConstructor: function(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0 }, getScaleDefaults: function(e) { return this.defaults.hasOwnProperty(e) ? z.merge({}, [R.scale, this.defaults[e]]) : {} }, updateScaleDefaults: function(e, t) { this.defaults.hasOwnProperty(e) && (this.defaults[e] = z.extend(this.defaults[e], t)) }, addScalesToLayout: function(e) { z.each(e.scales, (function(t) { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, mt.addBox(e, t) })) } },
                    Ht = z.valueOrDefault,
                    Pt = z.rtl.getRtlAdapter;
                R._set("global", {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: z.noop,
                            title: function(e, t) {
                                var a = "",
                                    n = t.labels,
                                    r = n ? n.length : 0;
                                if (e.length > 0) {
                                    var i = e[0];
                                    i.label ? a = i.label : i.xLabel ? a = i.xLabel : r > 0 && i.index < r && (a = n[i.index])
                                }
                                return a
                            },
                            afterTitle: z.noop,
                            beforeBody: z.noop,
                            beforeLabel: z.noop,
                            label: function(e, t) { var a = t.datasets[e.datasetIndex].label || ""; return a && (a += ": "), z.isNullOrUndef(e.value) ? a += e.yLabel : a += e.value, a },
                            labelColor: function(e, t) { var a = t.getDatasetMeta(e.datasetIndex).data[e.index]._view; return { borderColor: a.borderColor, backgroundColor: a.backgroundColor } },
                            labelTextColor: function() { return this._options.bodyFontColor },
                            afterLabel: z.noop,
                            afterBody: z.noop,
                            beforeFooter: z.noop,
                            footer: z.noop,
                            afterFooter: z.noop
                        }
                    }
                });
                var Ot = {
                    average: function(e) {
                        if (!e.length) return !1;
                        var t, a, n = 0,
                            r = 0,
                            i = 0;
                        for (t = 0, a = e.length; t < a; ++t) {
                            var s = e[t];
                            if (s && s.hasValue()) {
                                var o = s.tooltipPosition();
                                n += o.x, r += o.y, ++i
                            }
                        }
                        return { x: n / i, y: r / i }
                    },
                    nearest: function(e, t) {
                        var a, n, r, i = t.x,
                            s = t.y,
                            o = Number.POSITIVE_INFINITY;
                        for (a = 0, n = e.length; a < n; ++a) {
                            var d = e[a];
                            if (d && d.hasValue()) {
                                var l = d.getCenterPoint(),
                                    u = z.distanceBetweenPoints(t, l);
                                u < o && (o = u, r = d)
                            }
                        }
                        if (r) {
                            var c = r.tooltipPosition();
                            i = c.x, s = c.y
                        }
                        return { x: i, y: s }
                    }
                };

                function At(e, t) { return t && (z.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

                function Ct(e) { return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e }

                function Rt(e) { var t = R.global; return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, rtl: e.rtl, textDirection: e.textDirection, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Ht(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Ht(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Ht(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Ht(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Ht(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Ht(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Ht(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Ht(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Ht(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth } }

                function Ft(e, t) { return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding }

                function Wt(e) { return At([], Ct(e)) }
                var Et = q.extend({
                        initialize: function() { this._model = Rt(this._options), this._lastActive = [] },
                        getTitle: function() {
                            var e = this,
                                t = e._options,
                                a = t.callbacks,
                                n = a.beforeTitle.apply(e, arguments),
                                r = a.title.apply(e, arguments),
                                i = a.afterTitle.apply(e, arguments),
                                s = [];
                            return s = At(s, Ct(n)), s = At(s, Ct(r)), s = At(s, Ct(i))
                        },
                        getBeforeBody: function() { return Wt(this._options.callbacks.beforeBody.apply(this, arguments)) },
                        getBody: function(e, t) {
                            var a = this,
                                n = a._options.callbacks,
                                r = [];
                            return z.each(e, (function(e) {
                                var i = { before: [], lines: [], after: [] };
                                At(i.before, Ct(n.beforeLabel.call(a, e, t))), At(i.lines, n.label.call(a, e, t)), At(i.after, Ct(n.afterLabel.call(a, e, t))), r.push(i)
                            })), r
                        },
                        getAfterBody: function() { return Wt(this._options.callbacks.afterBody.apply(this, arguments)) },
                        getFooter: function() {
                            var e = this,
                                t = e._options.callbacks,
                                a = t.beforeFooter.apply(e, arguments),
                                n = t.footer.apply(e, arguments),
                                r = t.afterFooter.apply(e, arguments),
                                i = [];
                            return i = At(i, Ct(a)), i = At(i, Ct(n)), i = At(i, Ct(r))
                        },
                        update: function(e) {
                            var t, a, n, r, i, s, o, d, l, u, c = this,
                                h = c._options,
                                _ = c._model,
                                m = c._model = Rt(h),
                                f = c._active,
                                p = c._data,
                                g = { xAlign: _.xAlign, yAlign: _.yAlign },
                                y = { x: _.x, y: _.y },
                                M = { width: _.width, height: _.height },
                                v = { x: _.caretX, y: _.caretY };
                            if (f.length) {
                                m.opacity = 1;
                                var b = [],
                                    L = [];
                                v = Ot[h.position].call(c, f, c._eventPosition);
                                var Y = [];
                                for (t = 0, a = f.length; t < a; ++t) Y.push((n = f[t], r = void 0, i = void 0, s = void 0, o = void 0, d = void 0, l = void 0, u = void 0, r = n._xScale, i = n._yScale || n._scale, s = n._index, o = n._datasetIndex, d = n._chart.getDatasetMeta(o).controller, l = d._getIndexScale(), u = d._getValueScale(), { xLabel: r ? r.getLabelForIndex(s, o) : "", yLabel: i ? i.getLabelForIndex(s, o) : "", label: l ? "" + l.getLabelForIndex(s, o) : "", value: u ? "" + u.getLabelForIndex(s, o) : "", index: s, datasetIndex: o, x: n._model.x, y: n._model.y }));
                                h.filter && (Y = Y.filter((function(e) { return h.filter(e, p) }))), h.itemSort && (Y = Y.sort((function(e, t) { return h.itemSort(e, t, p) }))), z.each(Y, (function(e) { b.push(h.callbacks.labelColor.call(c, e, c._chart)), L.push(h.callbacks.labelTextColor.call(c, e, c._chart)) })), m.title = c.getTitle(Y, p), m.beforeBody = c.getBeforeBody(Y, p), m.body = c.getBody(Y, p), m.afterBody = c.getAfterBody(Y, p), m.footer = c.getFooter(Y, p), m.x = v.x, m.y = v.y, m.caretPadding = h.caretPadding, m.labelColors = b, m.labelTextColors = L, m.dataPoints = Y, M = function(e, t) {
                                    var a = e._chart.ctx,
                                        n = 2 * t.yPadding,
                                        r = 0,
                                        i = t.body,
                                        s = i.reduce((function(e, t) { return e + t.before.length + t.lines.length + t.after.length }), 0);
                                    s += t.beforeBody.length + t.afterBody.length;
                                    var o = t.title.length,
                                        d = t.footer.length,
                                        l = t.titleFontSize,
                                        u = t.bodyFontSize,
                                        c = t.footerFontSize;
                                    n += o * l, n += o ? (o - 1) * t.titleSpacing : 0, n += o ? t.titleMarginBottom : 0, n += s * u, n += s ? (s - 1) * t.bodySpacing : 0, n += d ? t.footerMarginTop : 0, n += d * c, n += d ? (d - 1) * t.footerSpacing : 0;
                                    var h = 0,
                                        _ = function(e) { r = Math.max(r, a.measureText(e).width + h) };
                                    return a.font = z.fontString(l, t._titleFontStyle, t._titleFontFamily), z.each(t.title, _), a.font = z.fontString(u, t._bodyFontStyle, t._bodyFontFamily), z.each(t.beforeBody.concat(t.afterBody), _), h = t.displayColors ? u + 2 : 0, z.each(i, (function(e) { z.each(e.before, _), z.each(e.lines, _), z.each(e.after, _) })), h = 0, a.font = z.fontString(c, t._footerFontStyle, t._footerFontFamily), z.each(t.footer, _), { width: r += 2 * t.xPadding, height: n }
                                }(this, m), y = function(e, t, a, n) {
                                    var r = e.x,
                                        i = e.y,
                                        s = e.caretSize,
                                        o = e.caretPadding,
                                        d = e.cornerRadius,
                                        l = a.xAlign,
                                        u = a.yAlign,
                                        c = s + o,
                                        h = d + o;
                                    return "right" === l ? r -= t.width : "center" === l && ((r -= t.width / 2) + t.width > n.width && (r = n.width - t.width), r < 0 && (r = 0)), "top" === u ? i += c : i -= "bottom" === u ? t.height + c : t.height / 2, "center" === u ? "left" === l ? r += c : "right" === l && (r -= c) : "left" === l ? r -= h : "right" === l && (r += h), { x: r, y: i }
                                }(m, M, g = function(e, t) {
                                    var a, n, r, i, s, o = e._model,
                                        d = e._chart,
                                        l = e._chart.chartArea,
                                        u = "center",
                                        c = "center";
                                    o.y < t.height ? c = "top" : o.y > d.height - t.height && (c = "bottom");
                                    var h = (l.left + l.right) / 2,
                                        _ = (l.top + l.bottom) / 2;
                                    "center" === c ? (a = function(e) { return e <= h }, n = function(e) { return e > h }) : (a = function(e) { return e <= t.width / 2 }, n = function(e) { return e >= d.width - t.width / 2 }), r = function(e) { return e + t.width + o.caretSize + o.caretPadding > d.width }, i = function(e) { return e - t.width - o.caretSize - o.caretPadding < 0 }, s = function(e) { return e <= _ ? "top" : "bottom" }, a(o.x) ? (u = "left", r(o.x) && (u = "center", c = s(o.y))) : n(o.x) && (u = "right", i(o.x) && (u = "center", c = s(o.y)));
                                    var m = e._options;
                                    return { xAlign: m.xAlign ? m.xAlign : u, yAlign: m.yAlign ? m.yAlign : c }
                                }(this, M), c._chart)
                            } else m.opacity = 0;
                            return m.xAlign = g.xAlign, m.yAlign = g.yAlign, m.x = y.x, m.y = y.y, m.width = M.width, m.height = M.height, m.caretX = v.x, m.caretY = v.y, c._model = m, e && h.custom && h.custom.call(c, m), c
                        },
                        drawCaret: function(e, t) {
                            var a = this._chart.ctx,
                                n = this._view,
                                r = this.getCaretPosition(e, t, n);
                            a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
                        },
                        getCaretPosition: function(e, t, a) {
                            var n, r, i, s, o, d, l = a.caretSize,
                                u = a.cornerRadius,
                                c = a.xAlign,
                                h = a.yAlign,
                                _ = e.x,
                                m = e.y,
                                f = t.width,
                                p = t.height;
                            if ("center" === h) o = m + p / 2, "left" === c ? (r = (n = _) - l, i = n, s = o + l, d = o - l) : (r = (n = _ + f) + l, i = n, s = o - l, d = o + l);
                            else if ("left" === c ? (n = (r = _ + u + l) - l, i = r + l) : "right" === c ? (n = (r = _ + f - u - l) - l, i = r + l) : (n = (r = a.caretX) - l, i = r + l), "top" === h) o = (s = m) - l, d = s;
                            else {
                                o = (s = m + p) + l, d = s;
                                var g = i;
                                i = n, n = g
                            }
                            return { x1: n, x2: r, x3: i, y1: s, y2: o, y3: d }
                        },
                        drawTitle: function(e, t, a) {
                            var n, r, i, s = t.title,
                                o = s.length;
                            if (o) { var d = Pt(t.rtl, t.x, t.width); for (e.x = Ft(t, t._titleAlign), a.textAlign = d.textAlign(t._titleAlign), a.textBaseline = "middle", n = t.titleFontSize, r = t.titleSpacing, a.fillStyle = t.titleFontColor, a.font = z.fontString(n, t._titleFontStyle, t._titleFontFamily), i = 0; i < o; ++i) a.fillText(s[i], d.x(e.x), e.y + n / 2), e.y += n + r, i + 1 === o && (e.y += t.titleMarginBottom - r) }
                        },
                        drawBody: function(e, t, a) {
                            var n, r, i, s, o, d, l, u, c = t.bodyFontSize,
                                h = t.bodySpacing,
                                _ = t._bodyAlign,
                                m = t.body,
                                f = t.displayColors,
                                p = 0,
                                g = f ? Ft(t, "left") : 0,
                                y = Pt(t.rtl, t.x, t.width),
                                M = function(t) { a.fillText(t, y.x(e.x + p), e.y + c / 2), e.y += c + h },
                                v = y.textAlign(_);
                            for (a.textAlign = _, a.textBaseline = "middle", a.font = z.fontString(c, t._bodyFontStyle, t._bodyFontFamily), e.x = Ft(t, v), a.fillStyle = t.bodyFontColor, z.each(t.beforeBody, M), p = f && "right" !== v ? "center" === _ ? c / 2 + 1 : c + 2 : 0, o = 0, l = m.length; o < l; ++o) {
                                for (n = m[o], r = t.labelTextColors[o], i = t.labelColors[o], a.fillStyle = r, z.each(n.before, M), d = 0, u = (s = n.lines).length; d < u; ++d) {
                                    if (f) {
                                        var b = y.x(g);
                                        a.fillStyle = t.legendColorBackground, a.fillRect(y.leftForLtr(b, c), e.y, c, c), a.lineWidth = 1, a.strokeStyle = i.borderColor, a.strokeRect(y.leftForLtr(b, c), e.y, c, c), a.fillStyle = i.backgroundColor, a.fillRect(y.leftForLtr(y.xPlus(b, 1), c - 2), e.y + 1, c - 2, c - 2), a.fillStyle = r
                                    }
                                    M(s[d])
                                }
                                z.each(n.after, M)
                            }
                            p = 0, z.each(t.afterBody, M), e.y -= h
                        },
                        drawFooter: function(e, t, a) {
                            var n, r, i = t.footer,
                                s = i.length;
                            if (s) { var o = Pt(t.rtl, t.x, t.width); for (e.x = Ft(t, t._footerAlign), e.y += t.footerMarginTop, a.textAlign = o.textAlign(t._footerAlign), a.textBaseline = "middle", n = t.footerFontSize, a.fillStyle = t.footerFontColor, a.font = z.fontString(n, t._footerFontStyle, t._footerFontFamily), r = 0; r < s; ++r) a.fillText(i[r], o.x(e.x), e.y + n / 2), e.y += n + t.footerSpacing }
                        },
                        drawBackground: function(e, t, a, n) {
                            a.fillStyle = t.backgroundColor, a.strokeStyle = t.borderColor, a.lineWidth = t.borderWidth;
                            var r = t.xAlign,
                                i = t.yAlign,
                                s = e.x,
                                o = e.y,
                                d = n.width,
                                l = n.height,
                                u = t.cornerRadius;
                            a.beginPath(), a.moveTo(s + u, o), "top" === i && this.drawCaret(e, n), a.lineTo(s + d - u, o), a.quadraticCurveTo(s + d, o, s + d, o + u), "center" === i && "right" === r && this.drawCaret(e, n), a.lineTo(s + d, o + l - u), a.quadraticCurveTo(s + d, o + l, s + d - u, o + l), "bottom" === i && this.drawCaret(e, n), a.lineTo(s + u, o + l), a.quadraticCurveTo(s, o + l, s, o + l - u), "center" === i && "left" === r && this.drawCaret(e, n), a.lineTo(s, o + u), a.quadraticCurveTo(s, o, s + u, o), a.closePath(), a.fill(), t.borderWidth > 0 && a.stroke()
                        },
                        draw: function() {
                            var e = this._chart.ctx,
                                t = this._view;
                            if (0 !== t.opacity) {
                                var a = { width: t.width, height: t.height },
                                    n = { x: t.x, y: t.y },
                                    r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                                    i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                                this._options.enabled && i && (e.save(), e.globalAlpha = r, this.drawBackground(n, t, e, a), n.y += t.yPadding, z.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), z.rtl.restoreTextDirection(e, t.textDirection), e.restore())
                            }
                        },
                        handleEvent: function(e) {
                            var t, a = this,
                                n = a._options;
                            return a._lastActive = a._lastActive || [], "mouseout" === e.type ? a._active = [] : (a._active = a._chart.getElementsAtEventForMode(e, n.mode, n), n.reverse && a._active.reverse()), (t = !z.arrayEquals(a._active, a._lastActive)) && (a._lastActive = a._active, (n.enabled || n.custom) && (a._eventPosition = { x: e.x, y: e.y }, a.update(!0), a.pivot())), t
                        }
                    }),
                    It = Ot,
                    zt = Et;
                zt.positioners = It;
                var Nt = z.valueOrDefault;

                function Bt() { return z.merge({}, [].slice.call(arguments), { merger: function(e, t, a, n) { if ("xAxes" === e || "yAxes" === e) { var r, i, s, o = a[e].length; for (t[e] || (t[e] = []), r = 0; r < o; ++r) s = a[e][r], i = Nt(s.type, "xAxes" === e ? "category" : "linear"), r >= t[e].length && t[e].push({}), !t[e][r].type || s.type && s.type !== t[e][r].type ? z.merge(t[e][r], [jt.getScaleDefaults(i), s]) : z.merge(t[e][r], s) } else z._merger(e, t, a, n) } }) }

                function Vt() {
                    return z.merge({}, [].slice.call(arguments), {
                        merger: function(e, t, a, n) {
                            var r = t[e] || {},
                                i = a[e];
                            "scales" === e ? t[e] = Bt(r, i) : "scale" === e ? t[e] = z.merge(r, [jt.getScaleDefaults(i.type), i]) : z._merger(e, t, a, n)
                        }
                    })
                }

                function Ut(e) {
                    var t = e.options;
                    z.each(e.scales, (function(t) { mt.removeBox(e, t) })), t = Vt(R.global, R[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
                }

                function Jt(e, t, a) {
                    var n, r = function(e) { return e.id === n };
                    do { n = t + a++ } while (z.findIndex(e, r) >= 0);
                    return n
                }

                function Gt(e) { return "top" === e || "bottom" === e }

                function qt(e, t) { return function(a, n) { return a[e] === n[e] ? a[t] - n[t] : a[e] - n[e] } }
                R._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 });
                var Kt = function(e, t) { return this.construct(e, t), this };
                z.extend(Kt.prototype, {
                    construct: function(e, t) {
                        var a = this;
                        t = function(e) { var t = (e = e || {}).data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Vt(R.global, R[e.type], e.options || {}), e }(t);
                        var n = Tt.acquireContext(e, t),
                            r = n && n.canvas,
                            i = r && r.height,
                            s = r && r.width;
                        a.id = z.uid(), a.ctx = n, a.canvas = r, a.config = t, a.width = s, a.height = i, a.aspectRatio = i ? s / i : null, a.options = t.options, a._bufferedRender = !1, a._layers = [], a.chart = a, a.controller = a, Kt.instances[a.id] = a, Object.defineProperty(a, "data", { get: function() { return a.config.data }, set: function(e) { a.config.data = e } }), n && r ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() { var e = this; return St.notify(e, "beforeInit"), z.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), St.notify(e, "afterInit"), e },
                    clear: function() { return z.canvas.clear(this), this },
                    stop: function() { return Z.cancelAnimation(this), this },
                    resize: function(e) {
                        var t = this,
                            a = t.options,
                            n = t.canvas,
                            r = a.maintainAspectRatio && t.aspectRatio || null,
                            i = Math.max(0, Math.floor(z.getMaximumWidth(n))),
                            s = Math.max(0, Math.floor(r ? i / r : z.getMaximumHeight(n)));
                        if ((t.width !== i || t.height !== s) && (n.width = t.width = i, n.height = t.height = s, n.style.width = i + "px", n.style.height = s + "px", z.retinaScale(t, a.devicePixelRatio), !e)) {
                            var o = { width: i, height: s };
                            St.notify(t, "resize", [o]), a.onResize && a.onResize(t, o), t.stop(), t.update({ duration: a.responsiveAnimationDuration })
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var e = this.options,
                            t = e.scales || {},
                            a = e.scale;
                        z.each(t.xAxes, (function(e, a) { e.id || (e.id = Jt(t.xAxes, "x-axis-", a)) })), z.each(t.yAxes, (function(e, a) { e.id || (e.id = Jt(t.yAxes, "y-axis-", a)) })), a && (a.id = a.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var e = this,
                            t = e.options,
                            a = e.scales || {},
                            n = [],
                            r = Object.keys(a).reduce((function(e, t) { return e[t] = !1, e }), {});
                        t.scales && (n = n.concat((t.scales.xAxes || []).map((function(e) { return { options: e, dtype: "category", dposition: "bottom" } })), (t.scales.yAxes || []).map((function(e) { return { options: e, dtype: "linear", dposition: "left" } })))), t.scale && n.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), z.each(n, (function(t) {
                            var n = t.options,
                                i = n.id,
                                s = Nt(n.type, t.dtype);
                            Gt(n.position) !== Gt(t.dposition) && (n.position = t.dposition), r[i] = !0;
                            var o = null;
                            if (i in a && a[i].type === s)(o = a[i]).options = n, o.ctx = e.ctx, o.chart = e;
                            else {
                                var d = jt.getScaleConstructor(s);
                                if (!d) return;
                                o = new d({ id: i, type: s, options: n, ctx: e.ctx, chart: e }), a[o.id] = o
                            }
                            o.mergeTicksOptions(), t.isDefault && (e.scale = o)
                        })), z.each(r, (function(e, t) { e || delete a[t] })), e.scales = a, jt.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var e, t, a = this,
                            n = [],
                            r = a.data.datasets;
                        for (e = 0, t = r.length; e < t; e++) {
                            var i = r[e],
                                s = a.getDatasetMeta(e),
                                o = i.type || a.config.type;
                            if (s.type && s.type !== o && (a.destroyDatasetMeta(e), s = a.getDatasetMeta(e)), s.type = o, s.order = i.order || 0, s.index = e, s.controller) s.controller.updateIndex(e), s.controller.linkScales();
                            else {
                                var d = Ze[s.type];
                                if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                                s.controller = new d(a, e), n.push(s.controller)
                            }
                        }
                        return n
                    },
                    resetElements: function() {
                        var e = this;
                        z.each(e.data.datasets, (function(t, a) { e.getDatasetMeta(a).controller.reset() }), e)
                    },
                    reset: function() { this.resetElements(), this.tooltip.initialize() },
                    update: function(e) {
                        var t, a, n = this;
                        if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), Ut(n), St._invalidate(n), !1 !== St.notify(n, "beforeUpdate")) {
                            n.tooltip._data = n.data;
                            var r = n.buildOrUpdateControllers();
                            for (t = 0, a = n.data.datasets.length; t < a; t++) n.getDatasetMeta(t).controller.buildOrUpdateElements();
                            n.updateLayout(), n.options.animation && n.options.animation.duration && z.each(r, (function(e) { e.reset() })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], St.notify(n, "afterUpdate"), n._layers.sort(qt("z", "_idx")), n._bufferedRender ? n._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : n.render(e)
                        }
                    },
                    updateLayout: function() { var e = this;!1 !== St.notify(e, "beforeLayout") && (mt.update(this, this.width, this.height), e._layers = [], z.each(e.boxes, (function(t) { t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers()) }), e), e._layers.forEach((function(e, t) { e._idx = t })), St.notify(e, "afterScaleUpdate"), St.notify(e, "afterLayout")) },
                    updateDatasets: function() {
                        if (!1 !== St.notify(this, "beforeDatasetsUpdate")) {
                            for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            St.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(e) {
                        var t = this.getDatasetMeta(e),
                            a = { meta: t, index: e };
                        !1 !== St.notify(this, "beforeDatasetUpdate", [a]) && (t.controller._update(), St.notify(this, "afterDatasetUpdate", [a]))
                    },
                    render: function(e) {
                        var t = this;
                        e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] });
                        var a = t.options.animation,
                            n = Nt(e.duration, a && a.duration),
                            r = e.lazy;
                        if (!1 !== St.notify(t, "beforeRender")) {
                            var i = function(e) { St.notify(t, "afterRender"), z.callback(a && a.onComplete, [e], t) };
                            if (a && n) {
                                var s = new $({
                                    numSteps: n / 16.66,
                                    easing: e.easing || a.easing,
                                    render: function(e, t) {
                                        var a = z.easing.effects[t.easing],
                                            n = t.currentStep,
                                            r = n / t.numSteps;
                                        e.draw(a(r), r, n)
                                    },
                                    onAnimationProgress: a.onProgress,
                                    onAnimationComplete: i
                                });
                                Z.addAnimation(t, s, n, r)
                            } else t.draw(), i(new $({ numSteps: 0, chart: t }));
                            return t
                        }
                    },
                    draw: function(e) {
                        var t, a, n = this;
                        if (n.clear(), z.isNullOrUndef(e) && (e = 1), n.transition(e), !(n.width <= 0 || n.height <= 0) && !1 !== St.notify(n, "beforeDraw", [e])) {
                            for (a = n._layers, t = 0; t < a.length && a[t].z <= 0; ++t) a[t].draw(n.chartArea);
                            for (n.drawDatasets(e); t < a.length; ++t) a[t].draw(n.chartArea);
                            n._drawTooltip(e), St.notify(n, "afterDraw", [e])
                        }
                    },
                    transition: function(e) {
                        for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e)
                    },
                    _getSortedDatasetMetas: function(e) { var t, a, n = []; for (t = 0, a = (this.data.datasets || []).length; t < a; ++t) e && !this.isDatasetVisible(t) || n.push(this.getDatasetMeta(t)); return n.sort(qt("order", "index")), n },
                    _getSortedVisibleDatasetMetas: function() { return this._getSortedDatasetMetas(!0) },
                    drawDatasets: function(e) {
                        var t, a;
                        if (!1 !== St.notify(this, "beforeDatasetsDraw", [e])) {
                            for (a = (t = this._getSortedVisibleDatasetMetas()).length - 1; a >= 0; --a) this.drawDataset(t[a], e);
                            St.notify(this, "afterDatasetsDraw", [e])
                        }
                    },
                    drawDataset: function(e, t) { var a = { meta: e, index: e.index, easingValue: t };!1 !== St.notify(this, "beforeDatasetDraw", [a]) && (e.controller.draw(t), St.notify(this, "afterDatasetDraw", [a])) },
                    _drawTooltip: function(e) {
                        var t = this.tooltip,
                            a = { tooltip: t, easingValue: e };
                        !1 !== St.notify(this, "beforeTooltipDraw", [a]) && (t.draw(), St.notify(this, "afterTooltipDraw", [a]))
                    },
                    getElementAtEvent: function(e) { return rt.modes.single(this, e) },
                    getElementsAtEvent: function(e) { return rt.modes.label(this, e, { intersect: !0 }) },
                    getElementsAtXAxis: function(e) { return rt.modes["x-axis"](this, e, { intersect: !0 }) },
                    getElementsAtEventForMode: function(e, t, a) { var n = rt.modes[t]; return "function" == typeof n ? n(this, e, a) : [] },
                    getDatasetAtEvent: function(e) { return rt.modes.dataset(this, e, { intersect: !0 }) },
                    getDatasetMeta: function(e) {
                        var t = this.data.datasets[e];
                        t._meta || (t._meta = {});
                        var a = t._meta[this.id];
                        return a || (a = t._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: t.order || 0, index: e }), a
                    },
                    getVisibleDatasetCount: function() { for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++; return e },
                    isDatasetVisible: function(e) { var t = this.getDatasetMeta(e); return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden },
                    generateLegend: function() { return this.options.legendCallback(this) },
                    destroyDatasetMeta: function(e) {
                        var t = this.id,
                            a = this.data.datasets[e],
                            n = a._meta && a._meta[t];
                        n && (n.controller.destroy(), delete a._meta[t])
                    },
                    destroy: function() {
                        var e, t, a = this,
                            n = a.canvas;
                        for (a.stop(), e = 0, t = a.data.datasets.length; e < t; ++e) a.destroyDatasetMeta(e);
                        n && (a.unbindEvents(), z.canvas.clear(a), Tt.releaseContext(a.ctx), a.canvas = null, a.ctx = null), St.notify(a, "destroy"), delete Kt.instances[a.id]
                    },
                    toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new zt({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e)
                    },
                    bindEvents: function() {
                        var e = this,
                            t = e._listeners = {},
                            a = function() { e.eventHandler.apply(e, arguments) };
                        z.each(e.options.events, (function(n) { Tt.addEventListener(e, n, a), t[n] = a })), e.options.responsive && (a = function() { e.resize() }, Tt.addEventListener(e, "resize", a), t.resize = a)
                    },
                    unbindEvents: function() {
                        var e = this,
                            t = e._listeners;
                        t && (delete e._listeners, z.each(t, (function(t, a) { Tt.removeEventListener(e, a, t) })))
                    },
                    updateHoverStyle: function(e, t, a) { var n, r, i, s = a ? "set" : "remove"; for (r = 0, i = e.length; r < i; ++r)(n = e[r]) && this.getDatasetMeta(n._datasetIndex).controller[s + "HoverStyle"](n); "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + s + "DatasetHoverStyle"]() },
                    eventHandler: function(e) {
                        var t = this,
                            a = t.tooltip;
                        if (!1 !== St.notify(t, "beforeEvent", [e])) {
                            t._bufferedRender = !0, t._bufferedRequest = null;
                            var n = t.handleEvent(e);
                            a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)), St.notify(t, "afterEvent", [e]);
                            var r = t._bufferedRequest;
                            return r ? t.render(r) : n && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t
                        }
                    },
                    handleEvent: function(e) {
                        var t, a = this,
                            n = a.options || {},
                            r = n.hover;
                        return a.lastActive = a.lastActive || [], "mouseout" === e.type ? a.active = [] : a.active = a.getElementsAtEventForMode(e, r.mode, r), z.callback(n.onHover || n.hover.onHover, [e.native, a.active], a), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, r.mode, !1), a.active.length && r.mode && a.updateHoverStyle(a.active, r.mode, !0), t = !z.arrayEquals(a.active, a.lastActive), a.lastActive = a.active, t
                    }
                }), Kt.instances = {};
                var $t = Kt;

                function Zt() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

                function Xt(e) { this.options = e || {} }
                Kt.Controller = Kt, Kt.types = {}, z.configMerge = Vt, z.scaleMerge = Bt, z.extend(Xt.prototype, { formats: Zt, parse: Zt, format: Zt, add: Zt, diff: Zt, startOf: Zt, endOf: Zt, _create: function(e) { return e } }), Xt.override = function(e) { z.extend(Xt.prototype, e) };
                var Qt = { _date: Xt },
                    ea = {
                        formatters: {
                            values: function(e) { return z.isArray(e) ? e : "" + e },
                            linear: function(e, t, a) {
                                var n = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                                Math.abs(n) > 1 && e !== Math.floor(e) && (n = e - Math.floor(e));
                                var r = z.log10(Math.abs(n)),
                                    i = "";
                                if (0 !== e)
                                    if (Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1])) < 1e-4) {
                                        var s = z.log10(Math.abs(e)),
                                            o = Math.floor(s) - Math.floor(r);
                                        o = Math.max(Math.min(o, 20), 0), i = e.toExponential(o)
                                    } else {
                                        var d = -1 * Math.floor(r);
                                        d = Math.max(Math.min(d, 20), 0), i = e.toFixed(d)
                                    }
                                else i = "0";
                                return i
                            },
                            logarithmic: function(e, t, a) { var n = e / Math.pow(10, Math.floor(z.log10(e))); return 0 === e ? "0" : 1 === n || 2 === n || 5 === n || 0 === t || t === a.length - 1 ? e.toExponential() : "" }
                        }
                    },
                    ta = z.isArray,
                    aa = z.isNullOrUndef,
                    na = z.valueOrDefault,
                    ra = z.valueAtIndexOrDefault;

                function ia(e, t, a) {
                    var n, r = e.getTicks().length,
                        i = Math.min(t, r - 1),
                        s = e.getPixelForTick(i),
                        o = e._startPixel,
                        d = e._endPixel;
                    if (!(a && (n = 1 === r ? Math.max(s - o, d - s) : 0 === t ? (e.getPixelForTick(1) - s) / 2 : (s - e.getPixelForTick(i - 1)) / 2, (s += i < t ? n : -n) < o - 1e-6 || s > d + 1e-6))) return s
                }

                function sa(e, t, a, n) {
                    var r, i, s, o, d, l, u, c, h, _, m, f, p, g = a.length,
                        y = [],
                        M = [],
                        v = [];
                    for (r = 0; r < g; ++r) {
                        if (o = a[r].label, d = a[r].major ? t.major : t.minor, e.font = l = d.string, u = n[l] = n[l] || { data: {}, gc: [] }, c = d.lineHeight, h = _ = 0, aa(o) || ta(o)) {
                            if (ta(o))
                                for (i = 0, s = o.length; i < s; ++i) m = o[i], aa(m) || ta(m) || (h = z.measureText(e, u.data, u.gc, h, m), _ += c)
                        } else h = z.measureText(e, u.data, u.gc, h, o), _ = c;
                        y.push(h), M.push(_), v.push(c / 2)
                    }

                    function b(e) { return { width: y[e] || 0, height: M[e] || 0, offset: v[e] || 0 } }
                    return function(e, t) {
                        z.each(e, (function(e) {
                            var a, n = e.gc,
                                r = n.length / 2;
                            if (r > t) {
                                for (a = 0; a < r; ++a) delete e.data[n[a]];
                                n.splice(0, r)
                            }
                        }))
                    }(n, g), f = y.indexOf(Math.max.apply(null, y)), p = M.indexOf(Math.max.apply(null, M)), { first: b(0), last: b(g - 1), widest: b(f), highest: b(p) }
                }

                function oa(e) { return e.drawTicks ? e.tickMarkLength : 0 }

                function da(e) { var t, a; return e.display ? (t = z.options._parseFont(e), a = z.options.toPadding(e.padding), t.lineHeight + a.height) : 0 }

                function la(e, t) { return z.extend(z.options._parseFont({ fontFamily: na(t.fontFamily, e.fontFamily), fontSize: na(t.fontSize, e.fontSize), fontStyle: na(t.fontStyle, e.fontStyle), lineHeight: na(t.lineHeight, e.lineHeight) }), { color: z.options.resolve([t.fontColor, e.fontColor, R.global.defaultFontColor]) }) }

                function ua(e) { var t = la(e, e.minor); return { minor: t, major: e.major.enabled ? la(e, e.major) : t } }

                function ca(e) { var t, a, n, r = []; for (a = 0, n = e.length; a < n; ++a) void 0 !== (t = e[a])._index && r.push(t); return r }

                function ha(e, t, a, n) {
                    var r, i, s, o, d = na(a, 0),
                        l = Math.min(na(n, e.length), e.length),
                        u = 0;
                    for (t = Math.ceil(t), n && (t = (r = n - a) / Math.floor(r / t)), o = d; o < 0;) u++, o = Math.round(d + u * t);
                    for (i = Math.max(d, 0); i < l; i++) s = e[i], i === o ? (s._index = i, u++, o = Math.round(d + u * t)) : delete s.label
                }
                R._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: ea.formatters.values, minor: {}, major: {} } });
                var _a = q.extend({
                    zeroLineIndex: 0,
                    getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } },
                    getTicks: function() { return this._ticks },
                    _getLabels: function() { var e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [] },
                    mergeTicksOptions: function() {},
                    beforeUpdate: function() { z.callback(this.options.beforeUpdate, [this]) },
                    update: function(e, t, a) {
                        var n, r, i, s, o, d = this,
                            l = d.options.ticks,
                            u = l.sampleSize;
                        if (d.beforeUpdate(), d.maxWidth = e, d.maxHeight = t, d.margins = z.extend({ left: 0, right: 0, top: 0, bottom: 0 }, a), d._ticks = null, d.ticks = null, d._labelSizes = null, d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d._gridLineItems = null, d._labelItems = null, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], (!(s = d.afterBuildTicks(s) || s) || !s.length) && d.ticks)
                            for (s = [], n = 0, r = d.ticks.length; n < r; ++n) s.push({ value: d.ticks[n], major: !1 });
                        return d._ticks = s, o = u < s.length, i = d._convertTicksToLabels(o ? function(e, t) { for (var a = [], n = e.length / t, r = 0, i = e.length; r < i; r += n) a.push(e[Math.floor(r)]); return a }(s, u) : s), d._configure(), d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d._ticksToDraw = l.display && (l.autoSkip || "auto" === l.source) ? d._autoSkip(s) : s, o && (i = d._convertTicksToLabels(d._ticksToDraw)), d.ticks = i, d.afterUpdate(), d.minSize
                    },
                    _configure: function() {
                        var e, t, a = this,
                            n = a.options.ticks.reverse;
                        a.isHorizontal() ? (e = a.left, t = a.right) : (e = a.top, t = a.bottom, n = !n), a._startPixel = e, a._endPixel = t, a._reversePixels = n, a._length = t - e
                    },
                    afterUpdate: function() { z.callback(this.options.afterUpdate, [this]) },
                    beforeSetDimensions: function() { z.callback(this.options.beforeSetDimensions, [this]) },
                    setDimensions: function() {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                    },
                    afterSetDimensions: function() { z.callback(this.options.afterSetDimensions, [this]) },
                    beforeDataLimits: function() { z.callback(this.options.beforeDataLimits, [this]) },
                    determineDataLimits: z.noop,
                    afterDataLimits: function() { z.callback(this.options.afterDataLimits, [this]) },
                    beforeBuildTicks: function() { z.callback(this.options.beforeBuildTicks, [this]) },
                    buildTicks: z.noop,
                    afterBuildTicks: function(e) { var t = this; return ta(e) && e.length ? z.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = z.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e) },
                    beforeTickToLabelConversion: function() { z.callback(this.options.beforeTickToLabelConversion, [this]) },
                    convertTicksToLabels: function() {
                        var e = this.options.ticks;
                        this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function() { z.callback(this.options.afterTickToLabelConversion, [this]) },
                    beforeCalculateTickRotation: function() { z.callback(this.options.beforeCalculateTickRotation, [this]) },
                    calculateTickRotation: function() {
                        var e, t, a, n, r, i, s, o = this,
                            d = o.options,
                            l = d.ticks,
                            u = o.getTicks().length,
                            c = l.minRotation || 0,
                            h = l.maxRotation,
                            _ = c;
                        !o._isVisible() || !l.display || c >= h || u <= 1 || !o.isHorizontal() ? o.labelRotation = c : (t = (e = o._getLabelSizes()).widest.width, a = e.highest.height - e.highest.offset, n = Math.min(o.maxWidth, o.chart.width - t), t + 6 > (r = d.offset ? o.maxWidth / u : n / (u - 1)) && (r = n / (u - (d.offset ? .5 : 1)), i = o.maxHeight - oa(d.gridLines) - l.padding - da(d.scaleLabel), s = Math.sqrt(t * t + a * a), _ = z.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / r, 1)), Math.asin(Math.min(i / s, 1)) - Math.asin(a / s))), _ = Math.max(c, Math.min(h, _))), o.labelRotation = _)
                    },
                    afterCalculateTickRotation: function() { z.callback(this.options.afterCalculateTickRotation, [this]) },
                    beforeFit: function() { z.callback(this.options.beforeFit, [this]) },
                    fit: function() {
                        var e = this,
                            t = e.minSize = { width: 0, height: 0 },
                            a = e.chart,
                            n = e.options,
                            r = n.ticks,
                            i = n.scaleLabel,
                            s = n.gridLines,
                            o = e._isVisible(),
                            d = "bottom" === n.position,
                            l = e.isHorizontal();
                        if (l ? t.width = e.maxWidth : o && (t.width = oa(s) + da(i)), l ? o && (t.height = oa(s) + da(i)) : t.height = e.maxHeight, r.display && o) {
                            var u = ua(r),
                                c = e._getLabelSizes(),
                                h = c.first,
                                _ = c.last,
                                m = c.widest,
                                f = c.highest,
                                p = .4 * u.minor.lineHeight,
                                g = r.padding;
                            if (l) {
                                var y = 0 !== e.labelRotation,
                                    M = z.toRadians(e.labelRotation),
                                    v = Math.cos(M),
                                    b = Math.sin(M),
                                    L = b * m.width + v * (f.height - (y ? f.offset : 0)) + (y ? 0 : p);
                                t.height = Math.min(e.maxHeight, t.height + L + g);
                                var Y, k, D = e.getPixelForTick(0) - e.left,
                                    w = e.right - e.getPixelForTick(e.getTicks().length - 1);
                                y ? (Y = d ? v * h.width + b * h.offset : b * (h.height - h.offset), k = d ? b * (_.height - _.offset) : v * _.width + b * _.offset) : (Y = h.width / 2, k = _.width / 2), e.paddingLeft = Math.max((Y - D) * e.width / (e.width - D), 0) + 3, e.paddingRight = Math.max((k - w) * e.width / (e.width - w), 0) + 3
                            } else {
                                var x = r.mirror ? 0 : m.width + g + p;
                                t.width = Math.min(e.maxWidth, t.width + x), e.paddingTop = h.height / 2, e.paddingBottom = _.height / 2
                            }
                        }
                        e.handleMargins(), l ? (e.width = e._length = a.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = a.height - e.margins.top - e.margins.bottom)
                    },
                    handleMargins: function() {
                        var e = this;
                        e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
                    },
                    afterFit: function() { z.callback(this.options.afterFit, [this]) },
                    isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e },
                    isFullWidth: function() { return this.options.fullWidth },
                    getRightValue: function(e) {
                        if (aa(e)) return NaN;
                        if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
                        if (e)
                            if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x) } else if (void 0 !== e.y) return this.getRightValue(e.y);
                        return e
                    },
                    _convertTicksToLabels: function(e) { var t, a, n, r = this; for (r.ticks = e.map((function(e) { return e.value })), r.beforeTickToLabelConversion(), t = r.convertTicksToLabels(e) || r.ticks, r.afterTickToLabelConversion(), a = 0, n = e.length; a < n; ++a) e[a].label = t[a]; return t },
                    _getLabelSizes: function() {
                        var e = this,
                            t = e._labelSizes;
                        return t || (e._labelSizes = t = sa(e.ctx, ua(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t
                    },
                    _parseValue: function(e) { var t, a, n, r; return ta(e) ? (t = +this.getRightValue(e[0]), a = +this.getRightValue(e[1]), n = Math.min(t, a), r = Math.max(t, a)) : (t = void 0, a = e = +this.getRightValue(e), n = e, r = e), { min: n, max: r, start: t, end: a } },
                    _getScaleLabel: function(e) { var t = this._parseValue(e); return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e) },
                    getLabelForIndex: z.noop,
                    getPixelForValue: z.noop,
                    getValueForPixel: z.noop,
                    getPixelForTick: function(e) {
                        var t = this.options.offset,
                            a = this._ticks.length,
                            n = 1 / Math.max(a - (t ? 0 : 1), 1);
                        return e < 0 || e > a - 1 ? null : this.getPixelForDecimal(e * n + (t ? n / 2 : 0))
                    },
                    getPixelForDecimal: function(e) { return this._reversePixels && (e = 1 - e), this._startPixel + e * this._length },
                    getDecimalForPixel: function(e) { var t = (e - this._startPixel) / this._length; return this._reversePixels ? 1 - t : t },
                    getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) },
                    getBaseValue: function() {
                        var e = this.min,
                            t = this.max;
                        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                    },
                    _autoSkip: function(e) {
                        var t, a, n, r, i = this.options.ticks,
                            s = this._length,
                            o = i.maxTicksLimit || s / this._tickSize() + 1,
                            d = i.major.enabled ? function(e) { var t, a, n = []; for (t = 0, a = e.length; t < a; t++) e[t].major && n.push(t); return n }(e) : [],
                            l = d.length,
                            u = d[0],
                            c = d[l - 1];
                        if (l > o) return function(e, t, a) {
                            var n, r, i = 0,
                                s = t[0];
                            for (a = Math.ceil(a), n = 0; n < e.length; n++) r = e[n], n === s ? (r._index = n, s = t[++i * a]) : delete r.label
                        }(e, d, l / o), ca(e);
                        if (n = function(e, t, a, n) {
                                var r, i, s, o, d = function(e) {
                                        var t, a, n = e.length;
                                        if (n < 2) return !1;
                                        for (a = e[0], t = 1; t < n; ++t)
                                            if (e[t] - e[t - 1] !== a) return !1;
                                        return a
                                    }(e),
                                    l = (t.length - 1) / n;
                                if (!d) return Math.max(l, 1);
                                for (s = 0, o = (r = z.math._factorize(d)).length - 1; s < o; s++)
                                    if ((i = r[s]) > l) return i;
                                return Math.max(l, 1)
                            }(d, e, 0, o), l > 0) { for (t = 0, a = l - 1; t < a; t++) ha(e, n, d[t], d[t + 1]); return r = l > 1 ? (c - u) / (l - 1) : null, ha(e, n, z.isNullOrUndef(r) ? 0 : u - r, u), ha(e, n, c, z.isNullOrUndef(r) ? e.length : c + r), ca(e) }
                        return ha(e, n), ca(e)
                    },
                    _tickSize: function() {
                        var e = this.options.ticks,
                            t = z.toRadians(this.labelRotation),
                            a = Math.abs(Math.cos(t)),
                            n = Math.abs(Math.sin(t)),
                            r = this._getLabelSizes(),
                            i = e.autoSkipPadding || 0,
                            s = r ? r.widest.width + i : 0,
                            o = r ? r.highest.height + i : 0;
                        return this.isHorizontal() ? o * a > s * n ? s / a : o / n : o * n < s * a ? o / a : s / n
                    },
                    _isVisible: function() {
                        var e, t, a, n = this.chart,
                            r = this.options.display;
                        if ("auto" !== r) return !!r;
                        for (e = 0, t = n.data.datasets.length; e < t; ++e)
                            if (n.isDatasetVisible(e) && ((a = n.getDatasetMeta(e)).xAxisID === this.id || a.yAxisID === this.id)) return !0;
                        return !1
                    },
                    _computeGridLineItems: function(e) {
                        var t, a, n, r, i, s, o, d, l, u, c, h, _, m, f, p, g, y = this,
                            M = y.chart,
                            v = y.options,
                            b = v.gridLines,
                            L = v.position,
                            Y = b.offsetGridLines,
                            k = y.isHorizontal(),
                            D = y._ticksToDraw,
                            w = D.length + (Y ? 1 : 0),
                            x = oa(b),
                            T = [],
                            S = b.drawBorder ? ra(b.lineWidth, 0, 0) : 0,
                            j = S / 2,
                            H = z._alignPixel,
                            P = function(e) { return H(M, e, S) };
                        for ("top" === L ? (t = P(y.bottom), o = y.bottom - x, l = t - j, c = P(e.top) + j, _ = e.bottom) : "bottom" === L ? (t = P(y.top), c = e.top, _ = P(e.bottom) - j, o = t + j, l = y.top + x) : "left" === L ? (t = P(y.right), s = y.right - x, d = t - j, u = P(e.left) + j, h = e.right) : (t = P(y.left), u = e.left, h = P(e.right) - j, s = t + j, d = y.left + x), a = 0; a < w; ++a) n = D[a] || {}, aa(n.label) && a < D.length || (a === y.zeroLineIndex && v.offset === Y ? (m = b.zeroLineWidth, f = b.zeroLineColor, p = b.zeroLineBorderDash || [], g = b.zeroLineBorderDashOffset || 0) : (m = ra(b.lineWidth, a, 1), f = ra(b.color, a, "rgba(0,0,0,0.1)"), p = b.borderDash || [], g = b.borderDashOffset || 0), void 0 !== (r = ia(y, n._index || a, Y)) && (i = H(M, r, m), k ? s = d = u = h = i : o = l = c = _ = i, T.push({ tx1: s, ty1: o, tx2: d, ty2: l, x1: u, y1: c, x2: h, y2: _, width: m, color: f, borderDash: p, borderDashOffset: g })));
                        return T.ticksLength = w, T.borderValue = t, T
                    },
                    _computeLabelItems: function() {
                        var e, t, a, n, r, i, s, o, d, l, u, c, h = this,
                            _ = h.options,
                            m = _.ticks,
                            f = _.position,
                            p = m.mirror,
                            g = h.isHorizontal(),
                            y = h._ticksToDraw,
                            M = ua(m),
                            v = m.padding,
                            b = oa(_.gridLines),
                            L = -z.toRadians(h.labelRotation),
                            Y = [];
                        for ("top" === f ? (i = h.bottom - b - v, s = L ? "left" : "center") : "bottom" === f ? (i = h.top + b + v, s = L ? "right" : "center") : "left" === f ? (r = h.right - (p ? 0 : b) - v, s = p ? "left" : "right") : (r = h.left + (p ? 0 : b) + v, s = p ? "right" : "left"), e = 0, t = y.length; e < t; ++e) n = (a = y[e]).label, aa(n) || (o = h.getPixelForTick(a._index || e) + m.labelOffset, l = (d = a.major ? M.major : M.minor).lineHeight, u = ta(n) ? n.length : 1, g ? (r = o, c = "top" === f ? ((L ? 1 : .5) - u) * l : (L ? 0 : .5) * l) : (i = o, c = (1 - u) * l / 2), Y.push({ x: r, y: i, rotation: L, label: n, font: d, textOffset: c, textAlign: s }));
                        return Y
                    },
                    _drawGrid: function(e) {
                        var t = this,
                            a = t.options.gridLines;
                        if (a.display) {
                            var n, r, i, s, o, d = t.ctx,
                                l = t.chart,
                                u = z._alignPixel,
                                c = a.drawBorder ? ra(a.lineWidth, 0, 0) : 0,
                                h = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
                            for (i = 0, s = h.length; i < s; ++i) n = (o = h[i]).width, r = o.color, n && r && (d.save(), d.lineWidth = n, d.strokeStyle = r, d.setLineDash && (d.setLineDash(o.borderDash), d.lineDashOffset = o.borderDashOffset), d.beginPath(), a.drawTicks && (d.moveTo(o.tx1, o.ty1), d.lineTo(o.tx2, o.ty2)), a.drawOnChartArea && (d.moveTo(o.x1, o.y1), d.lineTo(o.x2, o.y2)), d.stroke(), d.restore());
                            if (c) {
                                var _, m, f, p, g = c,
                                    y = ra(a.lineWidth, h.ticksLength - 1, 1),
                                    M = h.borderValue;
                                t.isHorizontal() ? (_ = u(l, t.left, g) - g / 2, m = u(l, t.right, y) + y / 2, f = p = M) : (f = u(l, t.top, g) - g / 2, p = u(l, t.bottom, y) + y / 2, _ = m = M), d.lineWidth = c, d.strokeStyle = ra(a.color, 0), d.beginPath(), d.moveTo(_, f), d.lineTo(m, p), d.stroke()
                            }
                        }
                    },
                    _drawLabels: function() {
                        var e = this;
                        if (e.options.ticks.display) {
                            var t, a, n, r, i, s, o, d, l = e.ctx,
                                u = e._labelItems || (e._labelItems = e._computeLabelItems());
                            for (t = 0, n = u.length; t < n; ++t) {
                                if (s = (i = u[t]).font, l.save(), l.translate(i.x, i.y), l.rotate(i.rotation), l.font = s.string, l.fillStyle = s.color, l.textBaseline = "middle", l.textAlign = i.textAlign, o = i.label, d = i.textOffset, ta(o))
                                    for (a = 0, r = o.length; a < r; ++a) l.fillText("" + o[a], 0, d), d += s.lineHeight;
                                else l.fillText(o, 0, d);
                                l.restore()
                            }
                        }
                    },
                    _drawTitle: function() {
                        var e = this,
                            t = e.ctx,
                            a = e.options,
                            n = a.scaleLabel;
                        if (n.display) {
                            var r, i, s = na(n.fontColor, R.global.defaultFontColor),
                                o = z.options._parseFont(n),
                                d = z.options.toPadding(n.padding),
                                l = o.lineHeight / 2,
                                u = a.position,
                                c = 0;
                            if (e.isHorizontal()) r = e.left + e.width / 2, i = "bottom" === u ? e.bottom - l - d.bottom : e.top + l + d.top;
                            else {
                                var h = "left" === u;
                                r = h ? e.left + l + d.top : e.right - l - d.top, i = e.top + e.height / 2, c = h ? -.5 * Math.PI : .5 * Math.PI
                            }
                            t.save(), t.translate(r, i), t.rotate(c), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = s, t.font = o.string, t.fillText(n.labelString, 0, 0), t.restore()
                        }
                    },
                    draw: function(e) { this._isVisible() && (this._drawGrid(e), this._drawTitle(), this._drawLabels()) },
                    _layers: function() {
                        var e = this,
                            t = e.options,
                            a = t.ticks && t.ticks.z || 0,
                            n = t.gridLines && t.gridLines.z || 0;
                        return e._isVisible() && a !== n && e.draw === e._draw ? [{ z: n, draw: function() { e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments) } }, { z: a, draw: function() { e._drawLabels.apply(e, arguments) } }] : [{ z: a, draw: function() { e.draw.apply(e, arguments) } }]
                    },
                    _getMatchingVisibleMetas: function(e) {
                        var t = this,
                            a = t.isHorizontal();
                        return t.chart._getSortedVisibleDatasetMetas().filter((function(n) { return (!e || n.type === e) && (a ? n.xAxisID === t.id : n.yAxisID === t.id) }))
                    }
                });
                _a.prototype._draw = _a.prototype.draw;
                var ma = _a,
                    fa = z.isNullOrUndef,
                    pa = ma.extend({
                        determineDataLimits: function() {
                            var e, t = this,
                                a = t._getLabels(),
                                n = t.options.ticks,
                                r = n.min,
                                i = n.max,
                                s = 0,
                                o = a.length - 1;
                            void 0 !== r && (e = a.indexOf(r)) >= 0 && (s = e), void 0 !== i && (e = a.indexOf(i)) >= 0 && (o = e), t.minIndex = s, t.maxIndex = o, t.min = a[s], t.max = a[o]
                        },
                        buildTicks: function() {
                            var e = this._getLabels(),
                                t = this.minIndex,
                                a = this.maxIndex;
                            this.ticks = 0 === t && a === e.length - 1 ? e : e.slice(t, a + 1)
                        },
                        getLabelForIndex: function(e, t) { var a = this.chart; return a.getDatasetMeta(t).controller._getValueScaleId() === this.id ? this.getRightValue(a.data.datasets[t].data[e]) : this._getLabels()[e] },
                        _configure: function() {
                            var e = this,
                                t = e.options.offset,
                                a = e.ticks;
                            ma.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), a && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(a.length - (t ? 0 : 1), 1))
                        },
                        getPixelForValue: function(e, t, a) { var n, r, i, s = this; return fa(t) || fa(a) || (e = s.chart.data.datasets[a].data[t]), fa(e) || (n = s.isHorizontal() ? e.x : e.y), (void 0 !== n || void 0 !== e && isNaN(t)) && (r = s._getLabels(), e = z.valueOrDefault(n, e), t = -1 !== (i = r.indexOf(e)) ? i : t, isNaN(t) && (t = e)), s.getPixelForDecimal((t - s._startValue) / s._valueRange) },
                        getPixelForTick: function(e) { var t = this.ticks; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex) },
                        getValueForPixel: function(e) { var t = Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange); return Math.min(Math.max(t, 0), this.ticks.length - 1) },
                        getBasePixel: function() { return this.bottom }
                    }),
                    ga = { position: "bottom" };
                pa._defaults = ga;
                var ya = z.noop,
                    Ma = z.isNullOrUndef,
                    va = ma.extend({
                        getRightValue: function(e) { return "string" == typeof e ? +e : ma.prototype.getRightValue.call(this, e) },
                        handleTickRangeOptions: function() {
                            var e = this,
                                t = e.options.ticks;
                            if (t.beginAtZero) {
                                var a = z.sign(e.min),
                                    n = z.sign(e.max);
                                a < 0 && n < 0 ? e.max = 0 : a > 0 && n > 0 && (e.min = 0)
                            }
                            var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                                i = void 0 !== t.max || void 0 !== t.suggestedMax;
                            void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== i && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                        },
                        getTickLimit: function() {
                            var e, t = this.options.ticks,
                                a = t.stepSize,
                                n = t.maxTicksLimit;
                            return a ? e = Math.ceil(this.max / a) - Math.floor(this.min / a) + 1 : (e = this._computeTickLimit(), n = n || 11), n && (e = Math.min(n, e)), e
                        },
                        _computeTickLimit: function() { return Number.POSITIVE_INFINITY },
                        handleDirectionalChanges: ya,
                        buildTicks: function() {
                            var e = this,
                                t = e.options.ticks,
                                a = e.getTickLimit(),
                                n = { maxTicks: a = Math.max(2, a), min: t.min, max: t.max, precision: t.precision, stepSize: z.valueOrDefault(t.fixedStepSize, t.stepSize) },
                                r = e.ticks = function(e, t) {
                                    var a, n, r, i, s = [],
                                        o = e.stepSize,
                                        d = o || 1,
                                        l = e.maxTicks - 1,
                                        u = e.min,
                                        c = e.max,
                                        h = e.precision,
                                        _ = t.min,
                                        m = t.max,
                                        f = z.niceNum((m - _) / l / d) * d;
                                    if (f < 1e-14 && Ma(u) && Ma(c)) return [_, m];
                                    (i = Math.ceil(m / f) - Math.floor(_ / f)) > l && (f = z.niceNum(i * f / l / d) * d), o || Ma(h) ? a = Math.pow(10, z._decimalPlaces(f)) : (a = Math.pow(10, h), f = Math.ceil(f * a) / a), n = Math.floor(_ / f) * f, r = Math.ceil(m / f) * f, o && (!Ma(u) && z.almostWhole(u / f, f / 1e3) && (n = u), !Ma(c) && z.almostWhole(c / f, f / 1e3) && (r = c)), i = (r - n) / f, i = z.almostEquals(i, Math.round(i), f / 1e3) ? Math.round(i) : Math.ceil(i), n = Math.round(n * a) / a, r = Math.round(r * a) / a, s.push(Ma(u) ? n : u);
                                    for (var p = 1; p < i; ++p) s.push(Math.round((n + p * f) * a) / a);
                                    return s.push(Ma(c) ? r : c), s
                                }(n, e);
                            e.handleDirectionalChanges(), e.max = z.max(r), e.min = z.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), ma.prototype.convertTicksToLabels.call(e)
                        },
                        _configure: function() {
                            var e, t = this,
                                a = t.getTicks(),
                                n = t.min,
                                r = t.max;
                            ma.prototype._configure.call(t), t.options.offset && a.length && (n -= e = (r - n) / Math.max(a.length - 1, 1) / 2, r += e), t._startValue = n, t._endValue = r, t._valueRange = r - n
                        }
                    }),
                    ba = { position: "left", ticks: { callback: ea.formatters.linear } };

                function La(e, t, a, n) {
                    var r, i, s = e.options,
                        o = function(e, t, a) { var n = [a.type, void 0 === t && void 0 === a.stack ? a.index : "", a.stack].join("."); return void 0 === e[n] && (e[n] = { pos: [], neg: [] }), e[n] }(t, s.stacked, a),
                        d = o.pos,
                        l = o.neg,
                        u = n.length;
                    for (r = 0; r < u; ++r) i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || a.data[r].hidden || (d[r] = d[r] || 0, l[r] = l[r] || 0, s.relativePoints ? d[r] = 100 : i.min < 0 || i.max < 0 ? l[r] += i.min : d[r] += i.max)
                }

                function Ya(e, t, a) { var n, r, i = a.length; for (n = 0; n < i; ++n) r = e._parseValue(a[n]), isNaN(r.min) || isNaN(r.max) || t.data[n].hidden || (e.min = Math.min(e.min, r.min), e.max = Math.max(e.max, r.max)) }
                var ka = va.extend({
                        determineDataLimits: function() {
                            var e, t, a, n, r = this,
                                i = r.options,
                                s = r.chart.data.datasets,
                                o = r._getMatchingVisibleMetas(),
                                d = i.stacked,
                                l = {},
                                u = o.length;
                            if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === d)
                                for (e = 0; !d && e < u; ++e) d = void 0 !== (t = o[e]).stack;
                            for (e = 0; e < u; ++e) a = s[(t = o[e]).index].data, d ? La(r, l, t, a) : Ya(r, t, a);
                            z.each(l, (function(e) { n = e.pos.concat(e.neg), r.min = Math.min(r.min, z.min(n)), r.max = Math.max(r.max, z.max(n)) })), r.min = z.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = z.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() { var e; return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = z.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight)) },
                        handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() },
                        getLabelForIndex: function(e, t) { return this._getScaleLabel(this.chart.data.datasets[t].data[e]) },
                        getPixelForValue: function(e) { return this.getPixelForDecimal((+this.getRightValue(e) - this._startValue) / this._valueRange) },
                        getValueForPixel: function(e) { return this._startValue + this.getDecimalForPixel(e) * this._valueRange },
                        getPixelForTick: function(e) { var t = this.ticksAsNumbers; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]) }
                    }),
                    Da = ba;
                ka._defaults = Da;
                var wa = z.valueOrDefault,
                    xa = z.math.log10,
                    Ta = { position: "left", ticks: { callback: ea.formatters.logarithmic } };

                function Sa(e, t) { return z.isFinite(e) && e >= 0 ? e : t }
                var ja = ma.extend({
                        determineDataLimits: function() {
                            var e, t, a, n, r, i, s = this,
                                o = s.options,
                                d = s.chart,
                                l = d.data.datasets,
                                u = s.isHorizontal();

                            function c(e) { return u ? e.xAxisID === s.id : e.yAxisID === s.id }
                            s.min = Number.POSITIVE_INFINITY, s.max = Number.NEGATIVE_INFINITY, s.minNotZero = Number.POSITIVE_INFINITY;
                            var h = o.stacked;
                            if (void 0 === h)
                                for (e = 0; e < l.length; e++)
                                    if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && c(t) && void 0 !== t.stack) { h = !0; break }
                            if (o.stacked || h) {
                                var _ = {};
                                for (e = 0; e < l.length; e++) {
                                    var m = [(t = d.getDatasetMeta(e)).type, void 0 === o.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
                                    if (d.isDatasetVisible(e) && c(t))
                                        for (void 0 === _[m] && (_[m] = []), r = 0, i = (n = l[e].data).length; r < i; r++) {
                                            var f = _[m];
                                            a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (f[r] = f[r] || 0, f[r] += a.max)
                                        }
                                }
                                z.each(_, (function(e) {
                                    if (e.length > 0) {
                                        var t = z.min(e),
                                            a = z.max(e);
                                        s.min = Math.min(s.min, t), s.max = Math.max(s.max, a)
                                    }
                                }))
                            } else
                                for (e = 0; e < l.length; e++)
                                    if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && c(t))
                                        for (r = 0, i = (n = l[e].data).length; r < i; r++) a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (s.min = Math.min(a.min, s.min), s.max = Math.max(a.max, s.max), 0 !== a.min && (s.minNotZero = Math.min(a.min, s.minNotZero)));
                            s.min = z.isFinite(s.min) ? s.min : null, s.max = z.isFinite(s.max) ? s.max : null, s.minNotZero = z.isFinite(s.minNotZero) ? s.minNotZero : null, this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var e = this,
                                t = e.options.ticks;
                            e.min = Sa(t.min, e.min), e.max = Sa(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(xa(e.min)) - 1), e.max = Math.pow(10, Math.floor(xa(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(xa(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(xa(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(xa(e.max))) : e.minNotZero = 1)
                        },
                        buildTicks: function() {
                            var e = this,
                                t = e.options.ticks,
                                a = !e.isHorizontal(),
                                n = { min: Sa(t.min), max: Sa(t.max) },
                                r = e.ticks = function(e, t) {
                                    var a, n, r = [],
                                        i = wa(e.min, Math.pow(10, Math.floor(xa(t.min)))),
                                        s = Math.floor(xa(t.max)),
                                        o = Math.ceil(t.max / Math.pow(10, s));
                                    0 === i ? (a = Math.floor(xa(t.minNotZero)), n = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(i), i = n * Math.pow(10, a)) : (a = Math.floor(xa(i)), n = Math.floor(i / Math.pow(10, a)));
                                    var d = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                                    do { r.push(i), 10 == ++n && (n = 1, d = ++a >= 0 ? 1 : d), i = Math.round(n * Math.pow(10, a) * d) / d } while (a < s || a === s && n < o);
                                    var l = wa(e.max, i);
                                    return r.push(l), r
                                }(n, e);
                            e.max = z.max(r), e.min = z.min(r), t.reverse ? (a = !a, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), a && r.reverse()
                        },
                        convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), ma.prototype.convertTicksToLabels.call(this) },
                        getLabelForIndex: function(e, t) { return this._getScaleLabel(this.chart.data.datasets[t].data[e]) },
                        getPixelForTick: function(e) { var t = this.tickValues; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]) },
                        _getFirstTickValue: function(e) { var t = Math.floor(xa(e)); return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t) },
                        _configure: function() {
                            var e = this,
                                t = e.min,
                                a = 0;
                            ma.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), a = wa(e.options.ticks.fontSize, R.global.defaultFontSize) / e._length), e._startValue = xa(t), e._valueOffset = a, e._valueRange = (xa(e.max) - xa(t)) / (1 - a)
                        },
                        getPixelForValue: function(e) {
                            var t = this,
                                a = 0;
                            return (e = +t.getRightValue(e)) > t.min && e > 0 && (a = (xa(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(a)
                        },
                        getValueForPixel: function(e) {
                            var t = this,
                                a = t.getDecimalForPixel(e);
                            return 0 === a && 0 === t.min ? 0 : Math.pow(10, t._startValue + (a - t._valueOffset) * t._valueRange)
                        }
                    }),
                    Ha = Ta;
                ja._defaults = Ha;
                var Pa = z.valueOrDefault,
                    Oa = z.valueAtIndexOrDefault,
                    Aa = z.options.resolve,
                    Ca = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: ea.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(e) { return e } } };

                function Ra(e) { var t = e.ticks; return t.display && e.display ? Pa(t.fontSize, R.global.defaultFontSize) + 2 * t.backdropPaddingY : 0 }

                function Fa(e, t, a, n, r) { return e === n || e === r ? { start: t - a / 2, end: t + a / 2 } : e < n || e > r ? { start: t - a, end: t } : { start: t, end: t + a } }

                function Wa(e) { return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right" }

                function Ea(e, t, a, n) {
                    var r, i, s = a.y + n / 2;
                    if (z.isArray(t))
                        for (r = 0, i = t.length; r < i; ++r) e.fillText(t[r], a.x, s), s += n;
                    else e.fillText(t, a.x, s)
                }

                function Ia(e, t, a) { 90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h) }

                function za(e) { return z.isNumber(e) ? e : 0 }
                var Na = va.extend({
                        setDimensions: function() {
                            var e = this;
                            e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Ra(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
                        },
                        determineDataLimits: function() {
                            var e = this,
                                t = e.chart,
                                a = Number.POSITIVE_INFINITY,
                                n = Number.NEGATIVE_INFINITY;
                            z.each(t.data.datasets, (function(r, i) {
                                if (t.isDatasetVisible(i)) {
                                    var s = t.getDatasetMeta(i);
                                    z.each(r.data, (function(t, r) {
                                        var i = +e.getRightValue(t);
                                        isNaN(i) || s.data[r].hidden || (a = Math.min(i, a), n = Math.max(i, n))
                                    }))
                                }
                            })), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() { return Math.ceil(this.drawingArea / Ra(this.options)) },
                        convertTicksToLabels: function() {
                            var e = this;
                            va.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function() { var t = z.callback(e.options.pointLabels.callback, arguments, e); return t || 0 === t ? t : "" }))
                        },
                        getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) },
                        fit: function() {
                            var e = this.options;
                            e.display && e.pointLabels.display ? function(e) {
                                var t, a, n, r = z.options._parseFont(e.options.pointLabels),
                                    i = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                                    s = {};
                                e.ctx.font = r.string, e._pointLabelSizes = [];
                                var o, d, l, u = e.chart.data.labels.length;
                                for (t = 0; t < u; t++) {
                                    n = e.getPointPosition(t, e.drawingArea + 5), o = e.ctx, d = r.lineHeight, l = e.pointLabels[t], a = z.isArray(l) ? { w: z.longestText(o, o.font, l), h: l.length * d } : { w: o.measureText(l).width, h: d }, e._pointLabelSizes[t] = a;
                                    var c = e.getIndexAngle(t),
                                        h = z.toDegrees(c) % 360,
                                        _ = Fa(h, n.x, a.w, 0, 180),
                                        m = Fa(h, n.y, a.h, 90, 270);
                                    _.start < i.l && (i.l = _.start, s.l = c), _.end > i.r && (i.r = _.end, s.r = c), m.start < i.t && (i.t = m.start, s.t = c), m.end > i.b && (i.b = m.end, s.b = c)
                                }
                                e.setReductions(e.drawingArea, i, s)
                            }(this) : this.setCenterPoint(0, 0, 0, 0)
                        },
                        setReductions: function(e, t, a) {
                            var n = this,
                                r = t.l / Math.sin(a.l),
                                i = Math.max(t.r - n.width, 0) / Math.sin(a.r),
                                s = -t.t / Math.cos(a.t),
                                o = -Math.max(t.b - (n.height - n.paddingTop), 0) / Math.cos(a.b);
                            r = za(r), i = za(i), s = za(s), o = za(o), n.drawingArea = Math.min(Math.floor(e - (r + i) / 2), Math.floor(e - (s + o) / 2)), n.setCenterPoint(r, i, s, o)
                        },
                        setCenterPoint: function(e, t, a, n) {
                            var r = this,
                                i = r.width - t - r.drawingArea,
                                s = e + r.drawingArea,
                                o = a + r.drawingArea,
                                d = r.height - r.paddingTop - n - r.drawingArea;
                            r.xCenter = Math.floor((s + i) / 2 + r.left), r.yCenter = Math.floor((o + d) / 2 + r.top + r.paddingTop)
                        },
                        getIndexAngle: function(e) {
                            var t = this.chart,
                                a = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
                            return (a < 0 ? a + 360 : a) * Math.PI * 2 / 360
                        },
                        getDistanceFromCenterForValue: function(e) { var t = this; if (z.isNullOrUndef(e)) return NaN; var a = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a },
                        getPointPosition: function(e, t) { var a = this.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(a) * t + this.xCenter, y: Math.sin(a) * t + this.yCenter } },
                        getPointPositionForValue: function(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)) },
                        getBasePosition: function(e) {
                            var t = this.min,
                                a = this.max;
                            return this.getPointPositionForValue(e || 0, this.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0)
                        },
                        _drawGrid: function() {
                            var e, t, a, n = this,
                                r = n.ctx,
                                i = n.options,
                                s = i.gridLines,
                                o = i.angleLines,
                                d = Pa(o.lineWidth, s.lineWidth),
                                l = Pa(o.color, s.color);
                            if (i.pointLabels.display && function(e) {
                                    var t = e.ctx,
                                        a = e.options,
                                        n = a.pointLabels,
                                        r = Ra(a),
                                        i = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max),
                                        s = z.options._parseFont(n);
                                    t.save(), t.font = s.string, t.textBaseline = "middle";
                                    for (var o = e.chart.data.labels.length - 1; o >= 0; o--) {
                                        var d = 0 === o ? r / 2 : 0,
                                            l = e.getPointPosition(o, i + d + 5),
                                            u = Oa(n.fontColor, o, R.global.defaultFontColor);
                                        t.fillStyle = u;
                                        var c = e.getIndexAngle(o),
                                            h = z.toDegrees(c);
                                        t.textAlign = Wa(h), Ia(h, e._pointLabelSizes[o], l), Ea(t, e.pointLabels[o], l, s.lineHeight)
                                    }
                                    t.restore()
                                }(n), s.display && z.each(n.ticks, (function(e, a) {
                                    0 !== a && (t = n.getDistanceFromCenterForValue(n.ticksAsNumbers[a]), function(e, t, a, n) {
                                        var r, i = e.ctx,
                                            s = t.circular,
                                            o = e.chart.data.labels.length,
                                            d = Oa(t.color, n - 1),
                                            l = Oa(t.lineWidth, n - 1);
                                        if ((s || o) && d && l) {
                                            if (i.save(), i.strokeStyle = d, i.lineWidth = l, i.setLineDash && (i.setLineDash(t.borderDash || []), i.lineDashOffset = t.borderDashOffset || 0), i.beginPath(), s) i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI);
                                            else { r = e.getPointPosition(0, a), i.moveTo(r.x, r.y); for (var u = 1; u < o; u++) r = e.getPointPosition(u, a), i.lineTo(r.x, r.y) }
                                            i.closePath(), i.stroke(), i.restore()
                                        }
                                    }(n, s, t, a))
                                })), o.display && d && l) {
                                for (r.save(), r.lineWidth = d, r.strokeStyle = l, r.setLineDash && (r.setLineDash(Aa([o.borderDash, s.borderDash, []])), r.lineDashOffset = Aa([o.borderDashOffset, s.borderDashOffset, 0])), e = n.chart.data.labels.length - 1; e >= 0; e--) t = n.getDistanceFromCenterForValue(i.ticks.reverse ? n.min : n.max), a = n.getPointPosition(e, t), r.beginPath(), r.moveTo(n.xCenter, n.yCenter), r.lineTo(a.x, a.y), r.stroke();
                                r.restore()
                            }
                        },
                        _drawLabels: function() {
                            var e = this,
                                t = e.ctx,
                                a = e.options.ticks;
                            if (a.display) {
                                var n, r, i = e.getIndexAngle(0),
                                    s = z.options._parseFont(a),
                                    o = Pa(a.fontColor, R.global.defaultFontColor);
                                t.save(), t.font = s.string, t.translate(e.xCenter, e.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", z.each(e.ticks, (function(i, d) {
                                    (0 !== d || a.reverse) && (n = e.getDistanceFromCenterForValue(e.ticksAsNumbers[d]), a.showLabelBackdrop && (r = t.measureText(i).width, t.fillStyle = a.backdropColor, t.fillRect(-r / 2 - a.backdropPaddingX, -n - s.size / 2 - a.backdropPaddingY, r + 2 * a.backdropPaddingX, s.size + 2 * a.backdropPaddingY)), t.fillStyle = o, t.fillText(i, 0, -n))
                                })), t.restore()
                            }
                        },
                        _drawTitle: z.noop
                    }),
                    Ba = Ca;
                Na._defaults = Ba;
                var Va = z._deprecated,
                    Ua = z.options.resolve,
                    Ja = z.valueOrDefault,
                    Ga = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    qa = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    Ka = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } },
                    $a = Object.keys(Ka);

                function Za(e, t) { return e - t }

                function Xa(e) { return z.valueOrDefault(e.time.min, e.ticks.min) }

                function Qa(e) { return z.valueOrDefault(e.time.max, e.ticks.max) }

                function en(e, t, a, n) {
                    var r = function(e, t, a) {
                            for (var n, r, i, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                                if (r = e[(n = s + o >> 1) - 1] || null, i = e[n], !r) return { lo: null, hi: i };
                                if (i[t] < a) s = n + 1;
                                else {
                                    if (!(r[t] > a)) return { lo: r, hi: i };
                                    o = n - 1
                                }
                            }
                            return { lo: i, hi: null }
                        }(e, t, a),
                        i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
                        s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
                        o = s[t] - i[t],
                        d = o ? (a - i[t]) / o : 0,
                        l = (s[n] - i[n]) * d;
                    return i[n] + l
                }

                function tn(e, t) {
                    var a = e._adapter,
                        n = e.options.time,
                        r = n.parser,
                        i = r || n.format,
                        s = t;
                    return "function" == typeof r && (s = r(s)), z.isFinite(s) || (s = "string" == typeof i ? a.parse(s, i) : a.parse(s)), null !== s ? +s : (r || "function" != typeof i || (s = i(t), z.isFinite(s) || (s = a.parse(s))), s)
                }

                function an(e, t) {
                    if (z.isNullOrUndef(t)) return null;
                    var a = e.options.time,
                        n = tn(e, e.getRightValue(t));
                    return null === n ? n : (a.round && (n = +e._adapter.startOf(n, a.round)), n)
                }

                function nn(e, t, a, n) {
                    var r, i, s, o = $a.length;
                    for (r = $a.indexOf(e); r < o - 1; ++r)
                        if (s = (i = Ka[$a[r]]).steps ? i.steps : qa, i.common && Math.ceil((a - t) / (s * i.size)) <= n) return $a[r];
                    return $a[o - 1]
                }

                function rn(e, t, a) {
                    var n, r, i = [],
                        s = {},
                        o = t.length;
                    for (n = 0; n < o; ++n) s[r = t[n]] = n, i.push({ value: r, major: !1 });
                    return 0 !== o && a ? function(e, t, a, n) {
                        var r, i, s = e._adapter,
                            o = +s.startOf(t[0].value, n),
                            d = t[t.length - 1].value;
                        for (r = o; r <= d; r = +s.add(r, 1, n))(i = a[r]) >= 0 && (t[i].major = !0);
                        return t
                    }(e, i, s, a) : i
                }
                var sn = ma.extend({
                        initialize: function() { this.mergeTicksOptions(), ma.prototype.initialize.call(this) },
                        update: function() {
                            var e = this,
                                t = e.options,
                                a = t.time || (t.time = {}),
                                n = e._adapter = new Qt._date(t.adapters.date);
                            return Va("time scale", a.format, "time.format", "time.parser"), Va("time scale", a.min, "time.min", "ticks.min"), Va("time scale", a.max, "time.max", "ticks.max"), z.mergeIf(a.displayFormats, n.formats()), ma.prototype.update.apply(e, arguments)
                        },
                        getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), ma.prototype.getRightValue.call(this, e) },
                        determineDataLimits: function() {
                            var e, t, a, n, r, i, s, o = this,
                                d = o.chart,
                                l = o._adapter,
                                u = o.options,
                                c = u.time.unit || "day",
                                h = qa,
                                _ = Ga,
                                m = [],
                                f = [],
                                p = [],
                                g = o._getLabels();
                            for (e = 0, a = g.length; e < a; ++e) p.push(an(o, g[e]));
                            for (e = 0, a = (d.data.datasets || []).length; e < a; ++e)
                                if (d.isDatasetVisible(e))
                                    if (r = d.data.datasets[e].data, z.isObject(r[0]))
                                        for (f[e] = [], t = 0, n = r.length; t < n; ++t) i = an(o, r[t]), m.push(i), f[e][t] = i;
                                    else f[e] = p.slice(0), s || (m = m.concat(p), s = !0);
                            else f[e] = [];
                            p.length && (h = Math.min(h, p[0]), _ = Math.max(_, p[p.length - 1])), m.length && (m = a > 1 ? function(e) {
                                var t, a, n, r = {},
                                    i = [];
                                for (t = 0, a = e.length; t < a; ++t) r[n = e[t]] || (r[n] = !0, i.push(n));
                                return i
                            }(m).sort(Za) : m.sort(Za), h = Math.min(h, m[0]), _ = Math.max(_, m[m.length - 1])), h = an(o, Xa(u)) || h, _ = an(o, Qa(u)) || _, h = h === qa ? +l.startOf(Date.now(), c) : h, _ = _ === Ga ? +l.endOf(Date.now(), c) + 1 : _, o.min = Math.min(h, _), o.max = Math.max(h + 1, _), o._table = [], o._timestamps = { data: m, datasets: f, labels: p }
                        },
                        buildTicks: function() {
                            var e, t, a, n = this,
                                r = n.min,
                                i = n.max,
                                s = n.options,
                                o = s.ticks,
                                d = s.time,
                                l = n._timestamps,
                                u = [],
                                c = n.getLabelCapacity(r),
                                h = o.source,
                                _ = s.distribution;
                            for (l = "data" === h || "auto" === h && "series" === _ ? l.data : "labels" === h ? l.labels : function(e, t, a, n) {
                                    var r, i = e._adapter,
                                        s = e.options,
                                        o = s.time,
                                        d = o.unit || nn(o.minUnit, t, a, n),
                                        l = Ua([o.stepSize, o.unitStepSize, 1]),
                                        u = "week" === d && o.isoWeekday,
                                        c = t,
                                        h = [];
                                    if (u && (c = +i.startOf(c, "isoWeek", u)), c = +i.startOf(c, u ? "day" : d), i.diff(a, t, d) > 1e5 * l) throw t + " and " + a + " are too far apart with stepSize of " + l + " " + d;
                                    for (r = c; r < a; r = +i.add(r, l, d)) h.push(r);
                                    return r !== a && "ticks" !== s.bounds || h.push(r), h
                                }(n, r, i, c), "ticks" === s.bounds && l.length && (r = l[0], i = l[l.length - 1]), r = an(n, Xa(s)) || r, i = an(n, Qa(s)) || i, e = 0, t = l.length; e < t; ++e)(a = l[e]) >= r && a <= i && u.push(a);
                            return n.min = r, n.max = i, n._unit = d.unit || (o.autoSkip ? nn(d.minUnit, n.min, n.max, c) : function(e, t, a, n, r) {
                                var i, s;
                                for (i = $a.length - 1; i >= $a.indexOf(a); i--)
                                    if (s = $a[i], Ka[s].common && e._adapter.diff(r, n, s) >= t - 1) return s;
                                return $a[a ? $a.indexOf(a) : 0]
                            }(n, u.length, d.minUnit, n.min, n.max)), n._majorUnit = o.major.enabled && "year" !== n._unit ? function(e) {
                                for (var t = $a.indexOf(e) + 1, a = $a.length; t < a; ++t)
                                    if (Ka[$a[t]].common) return $a[t]
                            }(n._unit) : void 0, n._table = function(e, t, a, n) {
                                if ("linear" === n || !e.length) return [{ time: t, pos: 0 }, { time: a, pos: 1 }];
                                var r, i, s, o, d, l = [],
                                    u = [t];
                                for (r = 0, i = e.length; r < i; ++r)(o = e[r]) > t && o < a && u.push(o);
                                for (u.push(a), r = 0, i = u.length; r < i; ++r) d = u[r + 1], s = u[r - 1], o = u[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({ time: o, pos: r / (i - 1) });
                                return l
                            }(n._timestamps.data, r, i, _), n._offsets = function(e, t, a, n, r) {
                                var i, s, o = 0,
                                    d = 0;
                                return r.offset && t.length && (i = en(e, "time", t[0], "pos"), o = 1 === t.length ? 1 - i : (en(e, "time", t[1], "pos") - i) / 2, s = en(e, "time", t[t.length - 1], "pos"), d = 1 === t.length ? s : (s - en(e, "time", t[t.length - 2], "pos")) / 2), { start: o, end: d, factor: 1 / (o + 1 + d) }
                            }(n._table, u, 0, 0, s), o.reverse && u.reverse(), rn(n, u, n._majorUnit)
                        },
                        getLabelForIndex: function(e, t) {
                            var a = this,
                                n = a._adapter,
                                r = a.chart.data,
                                i = a.options.time,
                                s = r.labels && e < r.labels.length ? r.labels[e] : "",
                                o = r.datasets[t].data[e];
                            return z.isObject(o) && (s = a.getRightValue(o)), i.tooltipFormat ? n.format(tn(a, s), i.tooltipFormat) : "string" == typeof s ? s : n.format(tn(a, s), i.displayFormats.datetime)
                        },
                        tickFormatFunction: function(e, t, a, n) {
                            var r = this._adapter,
                                i = this.options,
                                s = i.time.displayFormats,
                                o = s[this._unit],
                                d = this._majorUnit,
                                l = s[d],
                                u = a[t],
                                c = i.ticks,
                                h = d && l && u && u.major,
                                _ = r.format(e, n || (h ? l : o)),
                                m = h ? c.major : c.minor,
                                f = Ua([m.callback, m.userCallback, c.callback, c.userCallback]);
                            return f ? f(_, t, a) : _
                        },
                        convertTicksToLabels: function(e) { var t, a, n = []; for (t = 0, a = e.length; t < a; ++t) n.push(this.tickFormatFunction(e[t].value, t, e)); return n },
                        getPixelForOffset: function(e) {
                            var t = this._offsets,
                                a = en(this._table, "time", e, "pos");
                            return this.getPixelForDecimal((t.start + a) * t.factor)
                        },
                        getPixelForValue: function(e, t, a) { var n = null; if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = an(this, e)), null !== n) return this.getPixelForOffset(n) },
                        getPixelForTick: function(e) { var t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null },
                        getValueForPixel: function(e) {
                            var t = this._offsets,
                                a = this.getDecimalForPixel(e) / t.factor - t.end,
                                n = en(this._table, "pos", a, "time");
                            return this._adapter._create(n)
                        },
                        _getLabelSize: function(e) {
                            var t = this.options.ticks,
                                a = this.ctx.measureText(e).width,
                                n = z.toRadians(this.isHorizontal() ? t.maxRotation : t.minRotation),
                                r = Math.cos(n),
                                i = Math.sin(n),
                                s = Ja(t.fontSize, R.global.defaultFontSize);
                            return { w: a * r + s * i, h: a * i + s * r }
                        },
                        getLabelWidth: function(e) { return this._getLabelSize(e).w },
                        getLabelCapacity: function(e) {
                            var t = this,
                                a = t.options.time,
                                n = a.displayFormats,
                                r = n[a.unit] || n.millisecond,
                                i = t.tickFormatFunction(e, 0, rn(t, [e], t._majorUnit), r),
                                s = t._getLabelSize(i),
                                o = Math.floor(t.isHorizontal() ? t.width / s.w : t.height / s.h);
                            return t.options.offset && o--, o > 0 ? o : 1
                        }
                    }),
                    on = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
                sn._defaults = on;
                var dn = { category: pa, linear: ka, logarithmic: ja, radialLinear: Na, time: sn },
                    ln = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
                Qt._date.override("function" == typeof e ? { _id: "moment", formats: function() { return ln }, parse: function(t, a) { return "string" == typeof t && "string" == typeof a ? t = e(t, a) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null }, format: function(t, a) { return e(t).format(a) }, add: function(t, a, n) { return e(t).add(a, n).valueOf() }, diff: function(t, a, n) { return e(t).diff(e(a), n) }, startOf: function(t, a, n) { return t = e(t), "isoWeek" === a ? t.isoWeekday(n).valueOf() : t.startOf(a).valueOf() }, endOf: function(t, a) { return e(t).endOf(a).valueOf() }, _create: function(t) { return e(t) } } : {}), R._set("global", { plugins: { filler: { propagate: !0 } } });
                var un = {
                    dataset: function(e) {
                        var t = e.fill,
                            a = e.chart,
                            n = a.getDatasetMeta(t),
                            r = n && a.isDatasetVisible(t) && n.dataset._children || [],
                            i = r.length || 0;
                        return i ? function(e, t) { return t < i && r[t]._view || null } : null
                    },
                    boundary: function(e) {
                        var t = e.boundary,
                            a = t ? t.x : null,
                            n = t ? t.y : null;
                        return z.isArray(t) ? function(e, a) { return t[a] } : function(e) { return { x: null === a ? e.x : a, y: null === n ? e.y : n } }
                    }
                };

                function cn(e, t, a) {
                    var n, r = e._model || {},
                        i = r.fill;
                    if (void 0 === i && (i = !!r.backgroundColor), !1 === i || null === i) return !1;
                    if (!0 === i) return "origin";
                    if (n = parseFloat(i, 10), isFinite(n) && Math.floor(n) === n) return "-" !== i[0] && "+" !== i[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
                    switch (i) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return i;
                        default:
                            return !1
                    }
                }

                function hn(e) {
                    return (e.el._scale || {}).getPointPositionForValue ? function(e) {
                        var t, a, n, r, i, s = e.el._scale,
                            o = s.options,
                            d = s.chart.data.labels.length,
                            l = e.fill,
                            u = [];
                        if (!d) return null;
                        for (t = o.ticks.reverse ? s.max : s.min, a = o.ticks.reverse ? s.min : s.max, n = s.getPointPositionForValue(0, t), r = 0; r < d; ++r) i = "start" === l || "end" === l ? s.getPointPositionForValue(r, "start" === l ? t : a) : s.getBasePosition(r), o.gridLines.circular && (i.cx = n.x, i.cy = n.y, i.angle = s.getIndexAngle(r) - Math.PI / 2), u.push(i);
                        return u
                    }(e) : function(e) {
                        var t, a = e.el._model || {},
                            n = e.el._scale || {},
                            r = e.fill,
                            i = null;
                        if (isFinite(r)) return null;
                        if ("start" === r ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === r ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePixel && (i = n.getBasePixel()), null != i) { if (void 0 !== i.x && void 0 !== i.y) return i; if (z.isFinite(i)) return { x: (t = n.isHorizontal()) ? i : null, y: t ? null : i } }
                        return null
                    }(e)
                }

                function _n(e, t, a) {
                    var n, r = e[t].fill,
                        i = [t];
                    if (!a) return r;
                    for (; !1 !== r && -1 === i.indexOf(r);) {
                        if (!isFinite(r)) return r;
                        if (!(n = e[r])) return !1;
                        if (n.visible) return r;
                        i.push(r), r = n.fill
                    }
                    return !1
                }

                function mn(e) {
                    var t = e.fill,
                        a = "dataset";
                    return !1 === t ? null : (isFinite(t) || (a = "boundary"), un[a](e))
                }

                function fn(e) { return e && !e.skip }

                function pn(e, t, a, n, r) {
                    var i, s, o, d;
                    if (n && r) {
                        for (e.moveTo(t[0].x, t[0].y), i = 1; i < n; ++i) z.canvas.lineTo(e, t[i - 1], t[i]);
                        if (void 0 === a[0].angle)
                            for (e.lineTo(a[r - 1].x, a[r - 1].y), i = r - 1; i > 0; --i) z.canvas.lineTo(e, a[i], a[i - 1], !0);
                        else
                            for (s = a[0].cx, o = a[0].cy, d = Math.sqrt(Math.pow(a[0].x - s, 2) + Math.pow(a[0].y - o, 2)), i = r - 1; i > 0; --i) e.arc(s, o, d, a[i].angle, a[i - 1].angle, !0)
                    }
                }

                function gn(e, t, a, n, r, i) {
                    var s, o, d, l, u, c, h, _, m = t.length,
                        f = n.spanGaps,
                        p = [],
                        g = [],
                        y = 0,
                        M = 0;
                    for (e.beginPath(), s = 0, o = m; s < o; ++s) u = a(l = t[d = s % m]._view, d, n), c = fn(l), h = fn(u), i && void 0 === _ && c && (o = m + (_ = s + 1)), c && h ? (y = p.push(l), M = g.push(u)) : y && M && (f ? (c && p.push(l), h && g.push(u)) : (pn(e, p, g, y, M), y = M = 0, p = [], g = []));
                    pn(e, p, g, y, M), e.closePath(), e.fillStyle = r, e.fill()
                }
                var yn = {
                        id: "filler",
                        afterDatasetsUpdate: function(e, t) {
                            var a, n, r, i, s = (e.data.datasets || []).length,
                                o = t.propagate,
                                d = [];
                            for (n = 0; n < s; ++n) i = null, (r = (a = e.getDatasetMeta(n)).dataset) && r._model && r instanceof be.Line && (i = { visible: e.isDatasetVisible(n), fill: cn(r, n, s), chart: e, el: r }), a.$filler = i, d.push(i);
                            for (n = 0; n < s; ++n)(i = d[n]) && (i.fill = _n(d, n, o), i.boundary = hn(i), i.mapper = mn(i))
                        },
                        beforeDatasetsDraw: function(e) {
                            var t, a, n, r, i, s, o, d = e._getSortedVisibleDatasetMetas(),
                                l = e.ctx;
                            for (a = d.length - 1; a >= 0; --a)(t = d[a].$filler) && t.visible && (r = (n = t.el)._view, i = n._children || [], s = t.mapper, o = r.backgroundColor || R.global.defaultColor, s && o && i.length && (z.canvas.clipArea(l, e.chartArea), gn(l, i, s, r, o, n._loop), z.canvas.unclipArea(l)))
                        }
                    },
                    Mn = z.rtl.getRtlAdapter,
                    vn = z.noop,
                    bn = z.valueOrDefault;

                function Ln(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth }
                R._set("global", {
                    legend: {
                        display: !0,
                        position: "top",
                        align: "center",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function(e, t) {
                            var a = t.datasetIndex,
                                n = this.chart,
                                r = n.getDatasetMeta(a);
                            r.hidden = null === r.hidden ? !n.data.datasets[a].hidden : null, n.update()
                        },
                        onHover: null,
                        onLeave: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function(e) {
                                var t = e.data.datasets,
                                    a = e.options.legend || {},
                                    n = a.labels && a.labels.usePointStyle;
                                return e._getSortedDatasetMetas().map((function(a) { var r = a.controller.getStyle(n ? 0 : void 0); return { text: t[a.index].label, fillStyle: r.backgroundColor, hidden: !e.isDatasetVisible(a.index), lineCap: r.borderCapStyle, lineDash: r.borderDash, lineDashOffset: r.borderDashOffset, lineJoin: r.borderJoinStyle, lineWidth: r.borderWidth, strokeStyle: r.borderColor, pointStyle: r.pointStyle, rotation: r.rotation, datasetIndex: a.index } }), this)
                            }
                        }
                    },
                    legendCallback: function(e) {
                        var t, a, n, r = document.createElement("ul"),
                            i = e.data.datasets;
                        for (r.setAttribute("class", e.id + "-legend"), t = 0, a = i.length; t < a; t++)(n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = i[t].backgroundColor, i[t].label && n.appendChild(document.createTextNode(i[t].label));
                        return r.outerHTML
                    }
                });
                var Yn = q.extend({
                    initialize: function(e) { z.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 },
                    beforeUpdate: vn,
                    update: function(e, t, a) { var n = this; return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize },
                    afterUpdate: vn,
                    beforeSetDimensions: vn,
                    setDimensions: function() {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }
                    },
                    afterSetDimensions: vn,
                    beforeBuildLabels: vn,
                    buildLabels: function() {
                        var e = this,
                            t = e.options.labels || {},
                            a = z.callback(t.generateLabels, [e.chart], e) || [];
                        t.filter && (a = a.filter((function(a) { return t.filter(a, e.chart.data) }))), e.options.reverse && a.reverse(), e.legendItems = a
                    },
                    afterBuildLabels: vn,
                    beforeFit: vn,
                    fit: function() {
                        var e = this,
                            t = e.options,
                            a = t.labels,
                            n = t.display,
                            r = e.ctx,
                            i = z.options._parseFont(a),
                            s = i.size,
                            o = e.legendHitBoxes = [],
                            d = e.minSize,
                            l = e.isHorizontal();
                        if (l ? (d.width = e.maxWidth, d.height = n ? 10 : 0) : (d.width = n ? 10 : 0, d.height = e.maxHeight), n) {
                            if (r.font = i.string, l) {
                                var u = e.lineWidths = [0],
                                    c = 0;
                                r.textAlign = "left", r.textBaseline = "middle", z.each(e.legendItems, (function(e, t) {
                                    var n = Ln(a, s) + s / 2 + r.measureText(e.text).width;
                                    (0 === t || u[u.length - 1] + n + 2 * a.padding > d.width) && (c += s + a.padding, u[u.length - (t > 0 ? 0 : 1)] = 0), o[t] = { left: 0, top: 0, width: n, height: s }, u[u.length - 1] += n + a.padding
                                })), d.height += c
                            } else {
                                var h = a.padding,
                                    _ = e.columnWidths = [],
                                    m = e.columnHeights = [],
                                    f = a.padding,
                                    p = 0,
                                    g = 0;
                                z.each(e.legendItems, (function(e, t) {
                                    var n = Ln(a, s) + s / 2 + r.measureText(e.text).width;
                                    t > 0 && g + s + 2 * h > d.height && (f += p + a.padding, _.push(p), m.push(g), p = 0, g = 0), p = Math.max(p, n), g += s + h, o[t] = { left: 0, top: 0, width: n, height: s }
                                })), f += p, _.push(p), m.push(g), d.width += f
                            }
                            e.width = d.width, e.height = d.height
                        } else e.width = d.width = e.height = d.height = 0
                    },
                    afterFit: vn,
                    isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position },
                    draw: function() {
                        var e = this,
                            t = e.options,
                            a = t.labels,
                            n = R.global,
                            r = n.defaultColor,
                            i = n.elements.line,
                            s = e.height,
                            o = e.columnHeights,
                            d = e.width,
                            l = e.lineWidths;
                        if (t.display) {
                            var u, c = Mn(t.rtl, e.left, e.minSize.width),
                                h = e.ctx,
                                _ = bn(a.fontColor, n.defaultFontColor),
                                m = z.options._parseFont(a),
                                f = m.size;
                            h.textAlign = c.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = _, h.fillStyle = _, h.font = m.string;
                            var p = Ln(a, f),
                                g = e.legendHitBoxes,
                                y = function(e, n) {
                                    switch (t.align) {
                                        case "start":
                                            return a.padding;
                                        case "end":
                                            return e - n;
                                        default:
                                            return (e - n + a.padding) / 2
                                    }
                                },
                                M = e.isHorizontal();
                            u = M ? { x: e.left + y(d, l[0]), y: e.top + a.padding, line: 0 } : { x: e.left + a.padding, y: e.top + y(s, o[0]), line: 0 }, z.rtl.overrideTextDirection(e.ctx, t.textDirection);
                            var v = f + a.padding;
                            z.each(e.legendItems, (function(t, n) {
                                var _ = h.measureText(t.text).width,
                                    m = p + f / 2 + _,
                                    b = u.x,
                                    L = u.y;
                                c.setWidth(e.minSize.width), M ? n > 0 && b + m + a.padding > e.left + e.minSize.width && (L = u.y += v, u.line++, b = u.x = e.left + y(d, l[u.line])) : n > 0 && L + v > e.top + e.minSize.height && (b = u.x = b + e.columnWidths[u.line] + a.padding, u.line++, L = u.y = e.top + y(s, o[u.line]));
                                var Y = c.x(b);
                                ! function(e, t, n) {
                                    if (!(isNaN(p) || p <= 0)) {
                                        h.save();
                                        var s = bn(n.lineWidth, i.borderWidth);
                                        if (h.fillStyle = bn(n.fillStyle, r), h.lineCap = bn(n.lineCap, i.borderCapStyle), h.lineDashOffset = bn(n.lineDashOffset, i.borderDashOffset), h.lineJoin = bn(n.lineJoin, i.borderJoinStyle), h.lineWidth = s, h.strokeStyle = bn(n.strokeStyle, r), h.setLineDash && h.setLineDash(bn(n.lineDash, i.borderDash)), a && a.usePointStyle) {
                                            var o = p * Math.SQRT2 / 2,
                                                d = c.xPlus(e, p / 2),
                                                l = t + f / 2;
                                            z.canvas.drawPoint(h, n.pointStyle, o, d, l, n.rotation)
                                        } else h.fillRect(c.leftForLtr(e, p), t, p, f), 0 !== s && h.strokeRect(c.leftForLtr(e, p), t, p, f);
                                        h.restore()
                                    }
                                }(Y, L, t), g[n].left = c.leftForLtr(Y, g[n].width), g[n].top = L,
                                    function(e, t, a, n) {
                                        var r = f / 2,
                                            i = c.xPlus(e, p + r),
                                            s = t + r;
                                        h.fillText(a.text, i, s), a.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(i, s), h.lineTo(c.xPlus(i, n), s), h.stroke())
                                    }(Y, L, t, _), M ? u.x += m + a.padding : u.y += v
                            })), z.rtl.restoreTextDirection(e.ctx, t.textDirection)
                        }
                    },
                    _getLegendItemAt: function(e, t) {
                        var a, n, r, i = this;
                        if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom)
                            for (r = i.legendHitBoxes, a = 0; a < r.length; ++a)
                                if (e >= (n = r[a]).left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height) return i.legendItems[a];
                        return null
                    },
                    handleEvent: function(e) {
                        var t, a = this,
                            n = a.options,
                            r = "mouseup" === e.type ? "click" : e.type;
                        if ("mousemove" === r) { if (!n.onHover && !n.onLeave) return } else { if ("click" !== r) return; if (!n.onClick) return }
                        t = a._getLegendItemAt(e.x, e.y), "click" === r ? t && n.onClick && n.onClick.call(a, e.native, t) : (n.onLeave && t !== a._hoveredItem && (a._hoveredItem && n.onLeave.call(a, e.native, a._hoveredItem), a._hoveredItem = t), n.onHover && t && n.onHover.call(a, e.native, t))
                    }
                });

                function kn(e, t) {
                    var a = new Yn({ ctx: e.ctx, options: t, chart: e });
                    mt.configure(e, a, t), mt.addBox(e, a), e.legend = a
                }
                var Dn = {
                        id: "legend",
                        _element: Yn,
                        beforeInit: function(e) {
                            var t = e.options.legend;
                            t && kn(e, t)
                        },
                        beforeUpdate: function(e) {
                            var t = e.options.legend,
                                a = e.legend;
                            t ? (z.mergeIf(t, R.global.legend), a ? (mt.configure(e, a, t), a.options = t) : kn(e, t)) : a && (mt.removeBox(e, a), delete e.legend)
                        },
                        afterEvent: function(e, t) {
                            var a = e.legend;
                            a && a.handleEvent(t)
                        }
                    },
                    wn = z.noop;
                R._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } });
                var xn = q.extend({
                    initialize: function(e) { z.extend(this, e), this.legendHitBoxes = [] },
                    beforeUpdate: wn,
                    update: function(e, t, a) { var n = this; return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize },
                    afterUpdate: wn,
                    beforeSetDimensions: wn,
                    setDimensions: function() {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }
                    },
                    afterSetDimensions: wn,
                    beforeBuildLabels: wn,
                    buildLabels: wn,
                    afterBuildLabels: wn,
                    beforeFit: wn,
                    fit: function() {
                        var e, t = this,
                            a = t.options,
                            n = t.minSize = {},
                            r = t.isHorizontal();
                        a.display ? (e = (z.isArray(a.text) ? a.text.length : 1) * z.options._parseFont(a).lineHeight + 2 * a.padding, t.width = n.width = r ? t.maxWidth : e, t.height = n.height = r ? e : t.maxHeight) : t.width = n.width = t.height = n.height = 0
                    },
                    afterFit: wn,
                    isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e },
                    draw: function() {
                        var e = this,
                            t = e.ctx,
                            a = e.options;
                        if (a.display) {
                            var n, r, i, s = z.options._parseFont(a),
                                o = s.lineHeight,
                                d = o / 2 + a.padding,
                                l = 0,
                                u = e.top,
                                c = e.left,
                                h = e.bottom,
                                _ = e.right;
                            t.fillStyle = z.valueOrDefault(a.fontColor, R.global.defaultFontColor), t.font = s.string, e.isHorizontal() ? (r = c + (_ - c) / 2, i = u + d, n = _ - c) : (r = "left" === a.position ? c + d : _ - d, i = u + (h - u) / 2, n = h - u, l = Math.PI * ("left" === a.position ? -.5 : .5)), t.save(), t.translate(r, i), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
                            var m = a.text;
                            if (z.isArray(m))
                                for (var f = 0, p = 0; p < m.length; ++p) t.fillText(m[p], 0, f, n), f += o;
                            else t.fillText(m, 0, 0, n);
                            t.restore()
                        }
                    }
                });

                function Tn(e, t) {
                    var a = new xn({ ctx: e.ctx, options: t, chart: e });
                    mt.configure(e, a, t), mt.addBox(e, a), e.titleBlock = a
                }
                var Sn = {},
                    jn = yn,
                    Hn = Dn,
                    Pn = {
                        id: "title",
                        _element: xn,
                        beforeInit: function(e) {
                            var t = e.options.title;
                            t && Tn(e, t)
                        },
                        beforeUpdate: function(e) {
                            var t = e.options.title,
                                a = e.titleBlock;
                            t ? (z.mergeIf(t, R.global.title), a ? (mt.configure(e, a, t), a.options = t) : Tn(e, t)) : a && (mt.removeBox(e, a), delete e.titleBlock)
                        }
                    };
                for (var On in Sn.filler = jn, Sn.legend = Hn, Sn.title = Pn, $t.helpers = z,
                        function() {
                            function e(e, t, a) { var n; return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n }

                            function t(e) { return null != e && "none" !== e }

                            function a(a, n, r) {
                                var i = document.defaultView,
                                    s = z._getParentNode(a),
                                    o = i.getComputedStyle(a)[n],
                                    d = i.getComputedStyle(s)[n],
                                    l = t(o),
                                    u = t(d),
                                    c = Number.POSITIVE_INFINITY;
                                return l || u ? Math.min(l ? e(o, a, r) : c, u ? e(d, s, r) : c) : "none"
                            }
                            z.where = function(e, t) { if (z.isArray(e) && Array.prototype.filter) return e.filter(t); var a = []; return z.each(e, (function(e) { t(e) && a.push(e) })), a }, z.findIndex = Array.prototype.findIndex ? function(e, t, a) { return e.findIndex(t, a) } : function(e, t, a) {
                                a = void 0 === a ? e : a;
                                for (var n = 0, r = e.length; n < r; ++n)
                                    if (t.call(a, e[n], n, e)) return n;
                                return -1
                            }, z.findNextWhere = function(e, t, a) { z.isNullOrUndef(a) && (a = -1); for (var n = a + 1; n < e.length; n++) { var r = e[n]; if (t(r)) return r } }, z.findPreviousWhere = function(e, t, a) { z.isNullOrUndef(a) && (a = e.length); for (var n = a - 1; n >= 0; n--) { var r = e[n]; if (t(r)) return r } }, z.isNumber = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, z.almostEquals = function(e, t, a) { return Math.abs(e - t) < a }, z.almostWhole = function(e, t) { var a = Math.round(e); return a - t <= e && a + t >= e }, z.max = function(e) { return e.reduce((function(e, t) { return isNaN(t) ? e : Math.max(e, t) }), Number.NEGATIVE_INFINITY) }, z.min = function(e) { return e.reduce((function(e, t) { return isNaN(t) ? e : Math.min(e, t) }), Number.POSITIVE_INFINITY) }, z.sign = Math.sign ? function(e) { return Math.sign(e) } : function(e) { return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1 }, z.toRadians = function(e) { return e * (Math.PI / 180) }, z.toDegrees = function(e) { return e * (180 / Math.PI) }, z._decimalPlaces = function(e) { if (z.isFinite(e)) { for (var t = 1, a = 0; Math.round(e * t) / t !== e;) t *= 10, a++; return a } }, z.getAngleFromPoint = function(e, t) {
                                var a = t.x - e.x,
                                    n = t.y - e.y,
                                    r = Math.sqrt(a * a + n * n),
                                    i = Math.atan2(n, a);
                                return i < -.5 * Math.PI && (i += 2 * Math.PI), { angle: i, distance: r }
                            }, z.distanceBetweenPoints = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, z.aliasPixel = function(e) { return e % 2 == 0 ? 0 : .5 }, z._alignPixel = function(e, t, a) {
                                var n = e.currentDevicePixelRatio,
                                    r = a / 2;
                                return Math.round((t - r) * n) / n + r
                            }, z.splineCurve = function(e, t, a, n) {
                                var r = e.skip ? t : e,
                                    i = t,
                                    s = a.skip ? t : a,
                                    o = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
                                    d = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)),
                                    l = o / (o + d),
                                    u = d / (o + d),
                                    c = n * (l = isNaN(l) ? 0 : l),
                                    h = n * (u = isNaN(u) ? 0 : u);
                                return { previous: { x: i.x - c * (s.x - r.x), y: i.y - c * (s.y - r.y) }, next: { x: i.x + h * (s.x - r.x), y: i.y + h * (s.y - r.y) } }
                            }, z.EPSILON = Number.EPSILON || 1e-14, z.splineCurveMonotone = function(e) {
                                var t, a, n, r, i, s, o, d, l, u = (e || []).map((function(e) { return { model: e._model, deltaK: 0, mK: 0 } })),
                                    c = u.length;
                                for (t = 0; t < c; ++t)
                                    if (!(n = u[t]).model.skip) {
                                        if (a = t > 0 ? u[t - 1] : null, (r = t < c - 1 ? u[t + 1] : null) && !r.model.skip) {
                                            var h = r.model.x - n.model.x;
                                            n.deltaK = 0 !== h ? (r.model.y - n.model.y) / h : 0
                                        }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                                    }
                                for (t = 0; t < c - 1; ++t) n = u[t], r = u[t + 1], n.model.skip || r.model.skip || (z.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (i = n.mK / n.deltaK, s = r.mK / n.deltaK, (d = Math.pow(i, 2) + Math.pow(s, 2)) <= 9 || (o = 3 / Math.sqrt(d), n.mK = i * o * n.deltaK, r.mK = s * o * n.deltaK)));
                                for (t = 0; t < c; ++t)(n = u[t]).model.skip || (a = t > 0 ? u[t - 1] : null, r = t < c - 1 ? u[t + 1] : null, a && !a.model.skip && (l = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - l, n.model.controlPointPreviousY = n.model.y - l * n.mK), r && !r.model.skip && (l = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + l, n.model.controlPointNextY = n.model.y + l * n.mK))
                            }, z.nextItem = function(e, t, a) { return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1] }, z.previousItem = function(e, t, a) { return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1] }, z.niceNum = function(e, t) {
                                var a = Math.floor(z.log10(e)),
                                    n = e / Math.pow(10, a);
                                return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
                            }, z.requestAnimFrame = "undefined" == typeof window ? function(e) { e() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) }, z.getRelativePosition = function(e, t) {
                                var a, n, r = e.originalEvent || e,
                                    i = e.target || e.srcElement,
                                    s = i.getBoundingClientRect(),
                                    o = r.touches;
                                o && o.length > 0 ? (a = o[0].clientX, n = o[0].clientY) : (a = r.clientX, n = r.clientY);
                                var d = parseFloat(z.getStyle(i, "padding-left")),
                                    l = parseFloat(z.getStyle(i, "padding-top")),
                                    u = parseFloat(z.getStyle(i, "padding-right")),
                                    c = parseFloat(z.getStyle(i, "padding-bottom")),
                                    h = s.right - s.left - d - u,
                                    _ = s.bottom - s.top - l - c;
                                return { x: a = Math.round((a - s.left - d) / h * i.width / t.currentDevicePixelRatio), y: n = Math.round((n - s.top - l) / _ * i.height / t.currentDevicePixelRatio) }
                            }, z.getConstraintWidth = function(e) { return a(e, "max-width", "clientWidth") }, z.getConstraintHeight = function(e) { return a(e, "max-height", "clientHeight") }, z._calculatePadding = function(e, t, a) { return (t = z.getStyle(e, t)).indexOf("%") > -1 ? a * parseInt(t, 10) / 100 : parseInt(t, 10) }, z._getParentNode = function(e) { var t = e.parentNode; return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t }, z.getMaximumWidth = function(e) {
                                var t = z._getParentNode(e);
                                if (!t) return e.clientWidth;
                                var a = t.clientWidth,
                                    n = a - z._calculatePadding(t, "padding-left", a) - z._calculatePadding(t, "padding-right", a),
                                    r = z.getConstraintWidth(e);
                                return isNaN(r) ? n : Math.min(n, r)
                            }, z.getMaximumHeight = function(e) {
                                var t = z._getParentNode(e);
                                if (!t) return e.clientHeight;
                                var a = t.clientHeight,
                                    n = a - z._calculatePadding(t, "padding-top", a) - z._calculatePadding(t, "padding-bottom", a),
                                    r = z.getConstraintHeight(e);
                                return isNaN(r) ? n : Math.min(n, r)
                            }, z.getStyle = function(e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t) }, z.retinaScale = function(e, t) {
                                var a = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
                                if (1 !== a) {
                                    var n = e.canvas,
                                        r = e.height,
                                        i = e.width;
                                    n.height = r * a, n.width = i * a, e.ctx.scale(a, a), n.style.height || n.style.width || (n.style.height = r + "px", n.style.width = i + "px")
                                }
                            }, z.fontString = function(e, t, a) { return t + " " + e + "px " + a }, z.longestText = function(e, t, a, n) {
                                var r = (n = n || {}).data = n.data || {},
                                    i = n.garbageCollect = n.garbageCollect || [];
                                n.font !== t && (r = n.data = {}, i = n.garbageCollect = [], n.font = t), e.font = t;
                                var s, o, d, l, u, c = 0,
                                    h = a.length;
                                for (s = 0; s < h; s++)
                                    if (null != (l = a[s]) && !0 !== z.isArray(l)) c = z.measureText(e, r, i, c, l);
                                    else if (z.isArray(l))
                                    for (o = 0, d = l.length; o < d; o++) null == (u = l[o]) || z.isArray(u) || (c = z.measureText(e, r, i, c, u));
                                var _ = i.length / 2;
                                if (_ > a.length) {
                                    for (s = 0; s < _; s++) delete r[i[s]];
                                    i.splice(0, _)
                                }
                                return c
                            }, z.measureText = function(e, t, a, n, r) { var i = t[r]; return i || (i = t[r] = e.measureText(r).width, a.push(r)), i > n && (n = i), n }, z.numberOfLabelLines = function(e) { var t = 1; return z.each(e, (function(e) { z.isArray(e) && e.length > t && (t = e.length) })), t }, z.color = L ? function(e) { return e instanceof CanvasGradient && (e = R.global.defaultColor), L(e) } : function(e) { return console.error("Color.js not found!"), e }, z.getHoverColor = function(e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : z.color(e).saturate(.5).darken(.1).rgbString() }
                        }(), $t._adapters = Qt, $t.Animation = $, $t.animationService = Z, $t.controllers = Ze, $t.DatasetController = ae, $t.defaults = R, $t.Element = q, $t.elements = be, $t.Interaction = rt, $t.layouts = mt, $t.platform = Tt, $t.plugins = St, $t.Scale = ma, $t.scaleService = jt, $t.Ticks = ea, $t.Tooltip = zt, $t.helpers.each(dn, (function(e, t) { $t.scaleService.registerScaleType(t, e, e._defaults) })), Sn) Sn.hasOwnProperty(On) && $t.plugins.register(Sn[On]);
                $t.platform.initialize();
                var An = $t;
                return "undefined" != typeof window && (window.Chart = $t), $t.Chart = $t, $t.Legend = Sn.legend._element, $t.Title = Sn.title._element, $t.pluginService = $t.plugins, $t.PluginBase = $t.Element.extend({}), $t.canvasHelpers = $t.helpers.canvas, $t.layoutService = $t.layouts, $t.LinearScaleBase = va, $t.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) { $t[e] = function(t, a) { return new $t(t, $t.helpers.merge(a || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })) } })), An
            }(function() { try { return a("wd/R") } catch (e) {} }())
        },
        OIYi: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } })
            }(a("wd/R"))
        },
        Oaa7: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        Ob0Z: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                    a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };

                function n(e, t, a, n) {
                    var r = "";
                    if (t) switch (a) {
                        case "s":
                            r = "काही सेकंद";
                            break;
                        case "ss":
                            r = "%d सेकंद";
                            break;
                        case "m":
                            r = "एक मिनिट";
                            break;
                        case "mm":
                            r = "%d मिनिटे";
                            break;
                        case "h":
                            r = "एक तास";
                            break;
                        case "hh":
                            r = "%d तास";
                            break;
                        case "d":
                            r = "एक दिवस";
                            break;
                        case "dd":
                            r = "%d दिवस";
                            break;
                        case "M":
                            r = "एक महिना";
                            break;
                        case "MM":
                            r = "%d महिने";
                            break;
                        case "y":
                            r = "एक वर्ष";
                            break;
                        case "yy":
                            r = "%d वर्षे"
                    } else switch (a) {
                        case "s":
                            r = "काही सेकंदां";
                            break;
                        case "ss":
                            r = "%d सेकंदां";
                            break;
                        case "m":
                            r = "एका मिनिटा";
                            break;
                        case "mm":
                            r = "%d मिनिटां";
                            break;
                        case "h":
                            r = "एका तासा";
                            break;
                        case "hh":
                            r = "%d तासां";
                            break;
                        case "d":
                            r = "एका दिवसा";
                            break;
                        case "dd":
                            r = "%d दिवसां";
                            break;
                        case "M":
                            r = "एका महिन्या";
                            break;
                        case "MM":
                            r = "%d महिन्यां";
                            break;
                        case "y":
                            r = "एका वर्षा";
                            break;
                        case "yy":
                            r = "%d वर्षां"
                    }
                    return r.replace(/%d/i, e)
                }
                e.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0 }, meridiem: function(e, t, a) { return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        OjkT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
                    a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
                e.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", ss: "%d सेकेण्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        OmwH: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-mo", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "D/M/YYYY", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上" },
                    calendar: { sameDay: "[今天] LT", nextDay: "[明天] LT", nextWeek: "[下]dddd LT", lastDay: "[昨天] LT", lastWeek: "[上]dddd LT", sameElse: "L" },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: { future: "%s內", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }
                })
            }(a("wd/R"))
        },
        Oxv6: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 0: "-ум", 1: "-ум", 2: "-юм", 3: "-юм", 4: "-ум", 5: "-ум", 6: "-ум", 7: "-ум", 8: "-ум", 9: "-ум", 10: "-ум", 12: "-ум", 13: "-ум", 20: "-ум", 30: "-юм", 40: "-ум", 50: "-ум", 60: "-ум", 70: "-ум", 80: "-ум", 90: "-ум", 100: "-ум" };
                e.defineLocale("tg", {
                    months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                    weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                    weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Имрӯз соати] LT", nextDay: "[Пагоҳ соати] LT", lastDay: "[Дирӯз соати] LT", nextWeek: "dddd[и] [ҳафтаи оянда соати] LT", lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT", sameElse: "L" },
                    relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" },
                    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            n = e >= 100 ? 100 : null;
                        return e + (t[e] || t[a] || t[n])
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        PA2r: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                    a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
                    n = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
                    r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

                function i(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

                function s(e, t, a, n) {
                    var r = e + " ";
                    switch (a) {
                        case "s":
                            return t || n ? "pár sekund" : "pár sekundami";
                        case "ss":
                            return t || n ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
                        case "m":
                            return t ? "minuta" : n ? "minutu" : "minutou";
                        case "mm":
                            return t || n ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
                        case "h":
                            return t ? "hodina" : n ? "hodinu" : "hodinou";
                        case "hh":
                            return t || n ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
                        case "d":
                            return t || n ? "den" : "dnem";
                        case "dd":
                            return t || n ? r + (i(e) ? "dny" : "dní") : r + "dny";
                        case "M":
                            return t || n ? "měsíc" : "měsícem";
                        case "MM":
                            return t || n ? r + (i(e) ? "měsíce" : "měsíců") : r + "měsíci";
                        case "y":
                            return t || n ? "rok" : "rokem";
                        case "yy":
                            return t || n ? r + (i(e) ? "roky" : "let") : r + "lety"
                    }
                }
                e.defineLocale("cs", {
                    months: t,
                    monthsShort: a,
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zítra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v neděli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve středu v] LT";
                                case 4:
                                    return "[ve čtvrtek v] LT";
                                case 5:
                                    return "[v pátek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou neděli v] LT";
                                case 1:
                                case 2:
                                    return "[minulé] dddd [v] LT";
                                case 3:
                                    return "[minulou středu v] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "před %s", s: s, ss: s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        PeUW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
                    a = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };
                e.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", ss: "%d விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function(e) { return e + "வது" }, preparse: function(e) { return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function(e, t, a) { return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        PpIw: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
                    a = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };
                e.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", ss: "%d ಸೆಕೆಂಡುಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function(e) { return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ" }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function(e) { return e + "ನೇ" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        Qj4J: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } })
            }(a("wd/R"))
        },
        RAwQ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? r[a][0] : r[a][1] }

                function a(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var t = e % 10; return a(0 === t ? e / 10 : t) } if (e < 1e4) { for (; e >= 10;) e /= 10; return a(e) } return a(e /= 1e3) }
                e.defineLocale("lb", {
                    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gëschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: { future: function(e) { return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d Méint", y: t, yy: "%d Joer" },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        RPTm: function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row animated fadeIn">\n    <div class="col-lg-7">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="card-title">Perfil del usuario</h4>\n                <h6 class="card-subtitle">{{usuario.nombre}}</h6>\n                <form ngNativeValidate #f="ngForm" (ngSubmit)="guardar( f.value )" class="form p-t-20">\n                    <div class="form-group">\n                        <label for="exampleInputuname">Nombre de usuario</label>\n                        <div class="input-group">\n                            <div class="input-group-addon"><i class="ti-user"></i></div>\n                            <input [ngModel]="usuario.nombre" name="nombre" type="text" class="form-control" placeholder="Nombre de usuario" required>\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <label for="exampleInputEmail1">Correo de usuario</label>\n                        <div class="input-group">\n                            <div class="input-group-addon"><i class="ti-email"></i></div>\n                            <input [ngModel]="usuario.email" [disabled]="usuario.google" name="email" type="email" class="form-control" placeholder="Correo del usuario" required>\n                        </div>\n                    </div>\n\n                    <button type="submit" class=" btn btn-success waves-effect waves-light m-r-10 ">\n                      <i class="fa fa-save "></i>\n                      Guardar\n                    </button>\n\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-lg-5">\n        <div class="card">\n            <div class="card-body" align="center">\n                <h4 class="card-title ">Fotografia del usuario</h4>\n                <h6 class="card-subtitle ">{{usuario.nombre}}</h6>\n\n                <img *ngIf="!imagenTemp" [src]="usuario.img | imagen" class="w150">\n                <img *ngIf="imagenTemp" [src]="imagenTemp" class="w150">\n                <input (change)="seleccionImage( $event.target.files[0] )" type="file">\n\n                <br><br>\n\n                <button (click)="cambiarImagen()" [disabled]="!imagenSubir" type="button" class="btn btn-block btn-success waves-effect waves-light m-r-10 ">\n                    <i class="fa fa-save "></i>\n                    Actualizar foto\n                </button>\n\n            </div>\n        </div>\n    </div>\n\n</div>'
        },
        RnhZ: function(e, t, a) {
            var n = { "./af": "K/tc", "./af.js": "K/tc", "./ar": "jnO4", "./ar-dz": "o1bE", "./ar-dz.js": "o1bE", "./ar-kw": "Qj4J", "./ar-kw.js": "Qj4J", "./ar-ly": "HP3h", "./ar-ly.js": "HP3h", "./ar-ma": "CoRJ", "./ar-ma.js": "CoRJ", "./ar-sa": "gjCT", "./ar-sa.js": "gjCT", "./ar-tn": "bYM6", "./ar-tn.js": "bYM6", "./ar.js": "jnO4", "./az": "SFxW", "./az.js": "SFxW", "./be": "H8ED", "./be.js": "H8ED", "./bg": "hKrs", "./bg.js": "hKrs", "./bm": "p/rL", "./bm.js": "p/rL", "./bn": "kEOa", "./bn.js": "kEOa", "./bo": "0mo+", "./bo.js": "0mo+", "./br": "aIdf", "./br.js": "aIdf", "./bs": "JVSJ", "./bs.js": "JVSJ", "./ca": "1xZ4", "./ca.js": "1xZ4", "./cs": "PA2r", "./cs.js": "PA2r", "./cv": "A+xa", "./cv.js": "A+xa", "./cy": "l5ep", "./cy.js": "l5ep", "./da": "DxQv", "./da.js": "DxQv", "./de": "tGlX", "./de-at": "s+uk", "./de-at.js": "s+uk", "./de-ch": "u3GI", "./de-ch.js": "u3GI", "./de.js": "tGlX", "./dv": "WYrj", "./dv.js": "WYrj", "./el": "jUeY", "./el.js": "jUeY", "./en-au": "Dmvi", "./en-au.js": "Dmvi", "./en-ca": "OIYi", "./en-ca.js": "OIYi", "./en-gb": "Oaa7", "./en-gb.js": "Oaa7", "./en-ie": "4dOw", "./en-ie.js": "4dOw", "./en-il": "czMo", "./en-il.js": "czMo", "./en-in": "7C5Q", "./en-in.js": "7C5Q", "./en-nz": "b1Dy", "./en-nz.js": "b1Dy", "./en-sg": "t+mt", "./en-sg.js": "t+mt", "./eo": "Zduo", "./eo.js": "Zduo", "./es": "iYuL", "./es-do": "CjzT", "./es-do.js": "CjzT", "./es-us": "Vclq", "./es-us.js": "Vclq", "./es.js": "iYuL", "./et": "7BjC", "./et.js": "7BjC", "./eu": "D/JM", "./eu.js": "D/JM", "./fa": "jfSC", "./fa.js": "jfSC", "./fi": "gekB", "./fi.js": "gekB", "./fil": "1ppg", "./fil.js": "1ppg", "./fo": "ByF4", "./fo.js": "ByF4", "./fr": "nyYc", "./fr-ca": "2fjn", "./fr-ca.js": "2fjn", "./fr-ch": "Dkky", "./fr-ch.js": "Dkky", "./fr.js": "nyYc", "./fy": "cRix", "./fy.js": "cRix", "./ga": "USCx", "./ga.js": "USCx", "./gd": "9rRi", "./gd.js": "9rRi", "./gl": "iEDd", "./gl.js": "iEDd", "./gom-deva": "qvJo", "./gom-deva.js": "qvJo", "./gom-latn": "DKr+", "./gom-latn.js": "DKr+", "./gu": "4MV3", "./gu.js": "4MV3", "./he": "x6pH", "./he.js": "x6pH", "./hi": "3E1r", "./hi.js": "3E1r", "./hr": "S6ln", "./hr.js": "S6ln", "./hu": "WxRl", "./hu.js": "WxRl", "./hy-am": "1rYy", "./hy-am.js": "1rYy", "./id": "UDhR", "./id.js": "UDhR", "./is": "BVg3", "./is.js": "BVg3", "./it": "bpih", "./it-ch": "bxKX", "./it-ch.js": "bxKX", "./it.js": "bpih", "./ja": "B55N", "./ja.js": "B55N", "./jv": "tUCv", "./jv.js": "tUCv", "./ka": "IBtZ", "./ka.js": "IBtZ", "./kk": "bXm7", "./kk.js": "bXm7", "./km": "6B0Y", "./km.js": "6B0Y", "./kn": "PpIw", "./kn.js": "PpIw", "./ko": "Ivi+", "./ko.js": "Ivi+", "./ku": "JCF/", "./ku.js": "JCF/", "./ky": "lgnt", "./ky.js": "lgnt", "./lb": "RAwQ", "./lb.js": "RAwQ", "./lo": "sp3z", "./lo.js": "sp3z", "./lt": "JvlW", "./lt.js": "JvlW", "./lv": "uXwI", "./lv.js": "uXwI", "./me": "KTz0", "./me.js": "KTz0", "./mi": "aIsn", "./mi.js": "aIsn", "./mk": "aQkU", "./mk.js": "aQkU", "./ml": "AvvY", "./ml.js": "AvvY", "./mn": "lYtQ", "./mn.js": "lYtQ", "./mr": "Ob0Z", "./mr.js": "Ob0Z", "./ms": "6+QB", "./ms-my": "ZAMP", "./ms-my.js": "ZAMP", "./ms.js": "6+QB", "./mt": "G0Uy", "./mt.js": "G0Uy", "./my": "honF", "./my.js": "honF", "./nb": "bOMt", "./nb.js": "bOMt", "./ne": "OjkT", "./ne.js": "OjkT", "./nl": "+s0g", "./nl-be": "2ykv", "./nl-be.js": "2ykv", "./nl.js": "+s0g", "./nn": "uEye", "./nn.js": "uEye", "./oc-lnc": "Fnuy", "./oc-lnc.js": "Fnuy", "./pa-in": "8/+R", "./pa-in.js": "8/+R", "./pl": "jVdC", "./pl.js": "jVdC", "./pt": "8mBD", "./pt-br": "0tRk", "./pt-br.js": "0tRk", "./pt.js": "8mBD", "./ro": "lyxo", "./ro.js": "lyxo", "./ru": "lXzo", "./ru.js": "lXzo", "./sd": "Z4QM", "./sd.js": "Z4QM", "./se": "//9w", "./se.js": "//9w", "./si": "7aV9", "./si.js": "7aV9", "./sk": "e+ae", "./sk.js": "e+ae", "./sl": "gVVK", "./sl.js": "gVVK", "./sq": "yPMs", "./sq.js": "yPMs", "./sr": "zx6S", "./sr-cyrl": "E+lV", "./sr-cyrl.js": "E+lV", "./sr.js": "zx6S", "./ss": "Ur1D", "./ss.js": "Ur1D", "./sv": "X709", "./sv.js": "X709", "./sw": "dNwA", "./sw.js": "dNwA", "./ta": "PeUW", "./ta.js": "PeUW", "./te": "XLvN", "./te.js": "XLvN", "./tet": "V2x9", "./tet.js": "V2x9", "./tg": "Oxv6", "./tg.js": "Oxv6", "./th": "EOgW", "./th.js": "EOgW", "./tl-ph": "Dzi0", "./tl-ph.js": "Dzi0", "./tlh": "z3Vd", "./tlh.js": "z3Vd", "./tr": "DoHr", "./tr.js": "DoHr", "./tzl": "z1FC", "./tzl.js": "z1FC", "./tzm": "wQk9", "./tzm-latn": "tT3J", "./tzm-latn.js": "tT3J", "./tzm.js": "wQk9", "./ug-cn": "YRex", "./ug-cn.js": "YRex", "./uk": "raLr", "./uk.js": "raLr", "./ur": "UpQW", "./ur.js": "UpQW", "./uz": "Loxo", "./uz-latn": "AQ68", "./uz-latn.js": "AQ68", "./uz.js": "Loxo", "./vi": "KSF8", "./vi.js": "KSF8", "./x-pseudo": "/X5v", "./x-pseudo.js": "/X5v", "./yo": "fzPg", "./yo.js": "fzPg", "./zh-cn": "XDpg", "./zh-cn.js": "XDpg", "./zh-hk": "SatO", "./zh-hk.js": "SatO", "./zh-mo": "OmwH", "./zh-mo.js": "OmwH", "./zh-tw": "kOpN", "./zh-tw.js": "kOpN" };

            function r(e) { var t = i(e); return a(t) }

            function i(e) { if (!a.o(n, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return n[e] }
            r.keys = function() { return Object.keys(n) }, r.resolve = i, e.exports = r, r.id = "RnhZ"
        },
        S13f: function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarUsuario( input.value )" type="text" class="form-control" placeholder="Buscar usuario...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="cargando">\n    <div class="col-sm-12">\n        <div class="alert-warning text-center">\n            <strong>Cargando</strong>\n            <br>\n            <i class="fa fa-refresh fa-spin fa-2x"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n<div class="row animated fadeIn" *ngIf="!cargando">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n                <h4 class="arrow">{{this.salas}}</h4>\n                <h3 class="card-title">Usuarios registrados ( <small>{{ totalRegistros }}</small> )</h3>\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Imagen</th>\n                            <th>Correo</th>\n                            <th>Nombre</th>\n                            <th>Sala</th>\n                            <th>Role</th>\n                            <th>Auth</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor="let usuario of usuarios">\n                            <td class="w70">\n                                <img (click)="mostrarModal( usuario._id )" [src]="usuario.img | imagen:\'usuario\'" class="img-50 img-circle pointer">\n                            </td>\n                            <td>\n                                {{usuario.email}}\n                            </td>\n                            <td>\n                                {{usuario.nombre}}\n                            </td>\n                            <td>\n                                <select [(ngModel)]="usuario.sala" name="sala" class="form-control">\n                                        <option value="Juegos">JUEGOS</option>\n                                        <option value="Vacaciones">VACACIONES</option>\n                                        <option value="Idiomas">IDIOMAS</option>\n                                        <option value="Trabajo">TRABAJO</option>\n                                        <option value="Musica">MUSICA</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select [(ngModel)]="usuario.role" name="role" class="form-control">\n                                        <option value="ADMIN_ROLE">ADMIN_ROLE</option>\n                                        <option value="USER_ROLE">USER_ROLE</option>\n                                    </select>\n                            </td>\n                            <td>\n                                <label *ngIf="usuario.google" class="label label-danger">Google</label>\n                                <label *ngIf="!usuario.google" class="label label-info">Normal</label>\n                            </td>\n                            <td>\n                                <button (click)="guardarUsuario( usuario )" class="btn btn-primary">\n                                <i class="fa fa-save"></i>\n                                </button>\n\n                                <button (click)="borrarUsuario( usuario )" class="btn btn-danger">\n                                <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                  Anteriores\n                </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                  Siguientes\n                </button>\n            </div>\n        </div>\n    </div>\n</div>'
        },
        S6ln: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return n += 1 === e ? "dan" : "dana";
                        case "MM":
                            return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                e.defineLocale("hr", {
                    months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") },
                    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "Do MMMM YYYY", LLL: "Do MMMM YYYY H:mm", LLLL: "dddd, Do MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prošlu] [nedjelju] [u] LT";
                                case 3:
                                    return "[prošlu] [srijedu] [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        SFxW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };
                e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                    weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                    weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" },
                    relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyə", ss: "%d saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" },
                    meridiemParse: /gecə|səhər|gündüz|axşam/,
                    isPM: function(e) { return /^(gündüz|axşam)$/.test(e) },
                    meridiem: function(e, t, a) { return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "-ıncı";
                        var a = e % 10,
                            n = e % 100 - a,
                            r = e >= 100 ? 100 : null;
                        return e + (t[a] || t[n] || t[r])
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        SatO: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-hk", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1200 ? "上午" : 1200 === n ? "中午" : n < 1800 ? "下午" : "晚上" },
                    calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: { future: "%s後", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }
                })
            }(a("wd/R"))
        },
        UDhR: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        USCx: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ga", { months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"], monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"], weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"], weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Amárach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inné ag] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", ss: "%d soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d míonna", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        UpQW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                    a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
                e.defineLocale("ur", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function(e) { return "شام" === e }, meridiem: function(e, t, a) { return e < 12 ? "صبح" : "شام" }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", ss: "%d سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        Ur1D: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, t, a) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        V2x9: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "segundu balun", ss: "segundu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        Vclq: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        "WAV+": function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row animated fadeIn">\n    <div class="col-md-6">\n        <div class="card card-body">\n            <h3 class="box-title m-b-0">MEDICO: {{medico.nombre}}</h3>\n            <div class="row">\n                <div class="col-sm-12 col-xs-12">\n                    <form #f="ngForm" ngNativeValidate (ngSubmit)="guardarMedico(f)">\n                        <div class="form-group">\n                            <label>Nombre del medico</label>\n                            <input [(ngModel)]="medico.nombre" name="nombre" type="text" class="form-control" placeholder="Ingrese el nombre de medico" required>\n                        </div>\n\n                        <div class="form-group">\n                            <label>Hospital</label>\n                            <select (change)="cambioHospital( $event.target.value )" [(ngModel)]="medico.hospital" name="hospital" class="form-control" required>\n                              <option value="">Selecione hospital</option>\n                              <option *ngFor="let hospital of hospitales" [value]="hospital._id">{{hospital.nombre}}</option>\n                            </select>\n                        </div>\n\n                        <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">\n                          Guardar\n                        <i class="fa fa-save"></i>\n                        </button>\n                        <a routerLink="/medicos" class="btn btn-inverse waves-effect waves-light">Cancelar</a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="col-md-3">\n        <div class="card card-body">\n            <h4 class="box-title m-b-0">Hospital</h4>\n            <img [src]="hospital.img | imagen:\'hospital\'" class="rounded img-fluid">\n        </div>\n    </div>\n    <div class="col-md-3" *ngIf="medico._id">\n        <div class="card card-body">\n            <h4 class="box-title m-b-0">Fotografia</h4>\n            <img (click)="cambiarFoto()" [src]="medico.img | imagen:\'medico\'" class="img-circle img-fluid" pointer>\n        </div>\n    </div>\n</div>'
        },
        WOAq: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("Ju5/"),
                    r = a("L3Qv"),
                    i = "object" == typeof exports && exports && !exports.nodeType && exports,
                    s = i && "object" == typeof e && e && !e.nodeType && e,
                    o = s && s.exports === i ? n.a.Buffer : void 0,
                    d = (o ? o.isBuffer : void 0) || r.a;
                t.a = d
            }).call(this, a("3UD+")(e))
        },
        WYrj: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                    a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
                e.defineLocale("dv", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function(e) { return "މފ" === e }, meridiem: function(e, t, a) { return e < 12 ? "މކ" : "މފ" }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", ss: "d% ސިކުންތު", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 7, doy: 12 } })
            }(a("wd/R"))
        },
        WxRl: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

                function a(e, t, a, n) {
                    var r = e;
                    switch (a) {
                        case "s":
                            return n || t ? "néhány másodperc" : "néhány másodperce";
                        case "ss":
                            return r + (n || t) ? " másodperc" : " másodperce";
                        case "m":
                            return "egy" + (n || t ? " perc" : " perce");
                        case "mm":
                            return r + (n || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (n || t ? " óra" : " órája");
                        case "hh":
                            return r + (n || t ? " óra" : " órája");
                        case "d":
                            return "egy" + (n || t ? " nap" : " napja");
                        case "dd":
                            return r + (n || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (n || t ? " hónap" : " hónapja");
                        case "MM":
                            return r + (n || t ? " hónap" : " hónapja");
                        case "y":
                            return "egy" + (n || t ? " év" : " éve");
                        case "yy":
                            return r + (n || t ? " év" : " éve")
                    }
                    return ""
                }

                function n(e) { return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]" }
                e.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, a) { return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return n.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return n.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        X709: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t ? ":a" : 2 === t ? ":a" : ":e") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        XDpg: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-cn", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12 },
                    meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上" },
                    calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: function(e) { return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT" }, lastDay: "[昨天]LT", lastWeek: function(e) { return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT" }, sameElse: "L" },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "周";
                            default:
                                return e
                        }
                    },
                    relativeTime: { future: "%s后", past: "%s前", s: "几秒", ss: "%d 秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" },
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        XLvN: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", ss: "%d సెకన్లు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        XqMk: function(e, t, a) {
            "use strict";
            var n = "object" == typeof global && global && global.Object === Object && global;
            t.a = n
        },
        YRex: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ug-cn", {
                    months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                    weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" },
                    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12 },
                    meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "يېرىم كېچە" : n < 900 ? "سەھەر" : n < 1130 ? "چۈشتىن بۇرۇن" : n < 1230 ? "چۈش" : n < 1800 ? "چۈشتىن كېيىن" : "كەچ" },
                    calendar: { sameDay: "[بۈگۈن سائەت] LT", nextDay: "[ئەتە سائەت] LT", nextWeek: "[كېلەركى] dddd [سائەت] LT", lastDay: "[تۆنۈگۈن] LT", lastWeek: "[ئالدىنقى] dddd [سائەت] LT", sameElse: "L" },
                    relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", ss: "%d سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" },
                    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-كۈنى";
                            case "w":
                            case "W":
                                return e + "-ھەپتە";
                            default:
                                return e
                        }
                    },
                    preparse: function(e) { return e.replace(/،/g, ",") },
                    postformat: function(e) { return e.replace(/,/g, "،") },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        YuTi: function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } },
        Z4QM: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                    a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
                e.defineLocale("sd", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function(e) { return "شام" === e }, meridiem: function(e, t, a) { return e < 12 ? "صبح" : "شام" }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", ss: "%d سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        ZAMP: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        Zduo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "[la] D[-an de] MMMM, YYYY", LLL: "[la] D[-an de] MMMM, YYYY HH:mm", LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm", llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, a) { return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd[n je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasintan] dddd[n je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "kelkaj sekundoj", ss: "%d sekundoj", m: "unu minuto", mm: "%d minutoj", h: "unu horo", hh: "%d horoj", d: "unu tago", dd: "%d tagoj", M: "unu monato", MM: "%d monatoj", y: "unu jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        aIdf: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) { return e + " " + function(e, t) { return 2 === t ? function(e) { var t = { m: "v", b: "v", d: "z" }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }(e) : e }({ mm: "munutenn", MM: "miz", dd: "devezh" }[a], e) }
                var a = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
                    n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                    r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
                e.defineLocale("br", {
                    months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    weekdaysParse: r,
                    fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
                    shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
                    minWeekdaysParse: r,
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
                    monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY HH:mm", LLLL: "dddd, D [a viz] MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warcʼhoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Decʼh da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s ʼzo",
                        s: "un nebeud segondennoù",
                        ss: "%d eilenn",
                        m: "ur vunutenn",
                        mm: t,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: t,
                        M: "ur miz",
                        MM: t,
                        y: "ur bloaz",
                        yy: function(e) {
                            switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 9:
                                    return e + " bloaz";
                                default:
                                    return e + " vloaz"
                            }
                        }
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                    ordinal: function(e) { return e + (1 === e ? "añ" : "vet") },
                    week: { dow: 1, doy: 4 },
                    meridiemParse: /a.m.|g.m./,
                    isPM: function(e) { return "g.m." === e },
                    meridiem: function(e, t, a) { return e < 12 ? "a.m." : "g.m." }
                })
            }(a("wd/R"))
        },
        aIsn: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", ss: "%d hēkona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        aQkU: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mk", {
                    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[Денес во] LT",
                        nextDay: "[Утре во] LT",
                        nextWeek: "[Во] dddd [во] LT",
                        lastDay: "[Вчера во] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[Изминатата] dddd [во] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Изминатиот] dddd [во] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "за %s", past: "пред %s", s: "неколку секунди", ss: "%d секунди", m: "една минута", mm: "%d минути", h: "еден час", hh: "%d часа", d: "еден ден", dd: "%d дена", M: "еден месец", MM: "%d месеци", y: "една година", yy: "%d години" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            a = e % 100;
                        return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        b1Dy: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        bOMt: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        bXm7: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };
                e.defineLocale("kk", {
                    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" },
                    relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", ss: "%d секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            n = e >= 100 ? 100 : null;
                        return e + (t[e] || t[a] || t[n])
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        bYM6: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        bpih: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
                    calendar: {
                        sameDay: function() { return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                        nextDay: function() { return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                        nextWeek: function() { return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                        lastDay: function() { return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                                default:
                                    return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        bxKX: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("it-ch", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        cRix: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        czMo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } })
            }(a("wd/R"))
        },
        dNwA: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "siku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        dgmN: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("CcnG"),
                r = a("ZYCi"),
                i = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                s = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                o = function(e) { return e && e.__esModule ? e : { default: e } },
                d = function() {
                    function e() {}
                    return e.prototype.ngOnInit = function() {}, e = i([Object(n.n)({ selector: "app-dashboard", template: o(a("Ixm7")).default }), s("design:paramtypes", [])], e)
                }(),
                l = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                u = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                c = function(e) { return e && e.__esModule ? e : { default: e } },
                h = function() {
                    function e() { this.graficos = { grafico1: { labels: ["Con Frijoles", "Con Natilla", "Con tocino"], data: [24, 30, 46], type: "doughnut", leyenda: "El pan se come con" }, grafico2: { labels: ["Hombres", "Mujeres"], data: [4500, 6e3], type: "doughnut", leyenda: "Entrevistados" }, grafico3: { labels: ["Si", "No"], data: [95, 5], type: "doughnut", leyenda: "¿Le dan gases los frijoles?" }, grafico4: { labels: ["No", "Si"], data: [85, 15], type: "doughnut", leyenda: "¿Le importa que le den gases?" } } }
                    return e.prototype.ngOnInit = function() {}, e = l([Object(n.n)({ selector: "app-graficas1", template: c(a("05HB")).default }), u("design:paramtypes", [])], e)
                }(),
                _ = a("vWu4"),
                m = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                f = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                p = function(e) { return e && e.__esModule ? e : { default: e } },
                g = function() {
                    function e(e) { this._ajustes = e }
                    return e.prototype.ngOnInit = function() { this.colocarCheck() }, e.prototype.cambiarColor = function(e, t) { this.aplicarCheck(t), this._ajustes.aplicarTema(e) }, e.prototype.aplicarCheck = function(e) {
                        for (var t = 0, a = document.getElementsByClassName("selector"); t < a.length; t++) { a[t].classList.remove("working") }
                        e.classList.add("working")
                    }, e.prototype.colocarCheck = function() { for (var e = document.getElementsByClassName("selector"), t = this._ajustes.ajustes.tema, a = 0, n = e; a < n.length; a++) { var r = n[a]; if (r.getAttribute("data-theme") === t) { r.classList.add("working"); break } } }, e.ctorParameters = function() { return [{ type: _.g }] }, e = m([Object(n.n)({ selector: "app-accout-settings", template: p(a("4P15")).default }), f("design:paramtypes", [_.g])], e)
                }(),
                y = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                M = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                v = function(e) { return e && e.__esModule ? e : { default: e } },
                b = function() {
                    function e() { this.contarTres().then((function(e) { return console.log("Termino!", e) })).catch((function(e) { return console.error("Error en la promesa", e) })) }
                    return e.prototype.ngOnInit = function() {}, e.prototype.contarTres = function() {
                        return new Promise((function(e, t) {
                            var a = 0,
                                n = setInterval((function() { a += 1, console.log(a), 3 === a && (e(!0), clearInterval(n)) }), 1e3)
                        }))
                    }, e = y([Object(n.n)({ selector: "app-promesas", template: v(a("1Y4j")).default }), M("design:paramtypes", [])], e)
                }(),
                L = a("67Y/"),
                Y = a("VnD/"),
                k = a("88/t"),
                D = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                w = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                x = function(e) { return e && e.__esModule ? e : { default: e } },
                T = function() {
                    function e() { this.subscription = this.regresaObservable().subscribe((function(e) { return console.log("subs", e) }), (function(e) { return console.error("error en el obs", e) }), (function() { return console.log("El Observador termino") })) }
                    return e.prototype.ngOnInit = function() {}, e.prototype.ngOnDestroy = function() { console.log("La Pagina se va a cerrar"), this.subscription.unsubscribe() }, e.prototype.regresaObservable = function() {
                        return new k.a((function(e) {
                            var t = 0;
                            setInterval((function() {
                                var a = { valor: ++t };
                                e.next(a)
                            }), 1e3)
                        })).pipe(Object(L.a)((function(e) { return e.valor })), Object(Y.a)((function(e, t) { return e % 2 == 1 })))
                    }, e = D([Object(n.n)({ selector: "app-rxjs", template: x(a("lLLy")).default }), w("design:paramtypes", [])], e)
                }(),
                S = a("GUC0"),
                j = a.n(S),
                H = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                P = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                O = function(e) { return e && e.__esModule ? e : { default: e } },
                A = function() {
                    function e(e) { this._usuarioService = e, this.usuario = this._usuarioService.usuario }
                    return e.prototype.ngOnInit = function() {}, e.prototype.guardar = function(e) { this.usuario.nombre = e.nombre, this.usuario.google || (this.usuario.email = e.email), this._usuarioService.actualizarUsuario(this.usuario).subscribe() }, e.prototype.seleccionImage = function(e) {
                        var t = this;
                        if (e) {
                            if (e.type.indexOf("image") < 0) return j()("Solo imagenes", "El archivo seleccionado no se una imagen", "error"), void(this.imagenSubir = null);
                            this.imagenSubir = e;
                            var a = new FileReader;
                            a.readAsDataURL(e);
                            a.onloadend = function() { return t.imagenTemp = a.result }
                        } else this.imagenSubir = null
                    }, e.prototype.cambiarImagen = function() { this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id) }, e.ctorParameters = function() { return [{ type: _.k }] }, e = H([Object(n.n)({ selector: "app-profile", template: O(a("RPTm")).default }), P("design:paramtypes", [_.k])], e)
                }(),
                C = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                R = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                F = function(e) { return e && e.__esModule ? e : { default: e } },
                W = function() {
                    function e(e, t) { this._usuarioService = e, this._modalUploadService = t, this.usuarios = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 }
                    return e.prototype.ngOnInit = function() {
                        var e = this;
                        this.cargarUsuarios(), this.cargarSalasTodas(), this._modalUploadService.notificacion.subscribe((function(t) { return e.cargarUsuarios() }))
                    }, e.prototype.cargarUsuarios = function() {
                        var e = this;
                        this._usuarioService.cargarUsuarios().subscribe((function(t) { e.totalRegistros = t.total, e.usuarios = t.usuarios, e.cargando = !1 }))
                    }, e.prototype.cargarSalasTodas = function() {
                        var e = this;
                        this._usuarioService.cargarSalasTodas().subscribe((function(t) { e.salas = t.sala, e.cargando = !1 })), console.log("salas Usuario.comp", this.salas)
                    }, e.prototype.buscarUsuario = function(e) {
                        var t = this;
                        e.length <= 0 ? this.cargarUsuarios() : (this.cargando = !0, this._usuarioService.buscarUsuarios(e).subscribe((function(e) { t.usuarios = e, t.cargando = !1 })))
                    }, e.prototype.guardarUsuario = function(e) { this._usuarioService.actualizarUsuario(e).subscribe() }, e.prototype.borrarUsuario = function(e) {
                        var t = this;
                        e._id !== this._usuarioService.usuario._id ? j()("¿Esta seguro?", "Esta a punto de borrar a " + e.nombre, "warning").then((function(a) { console.log(a), a && t._usuarioService.borrarUsuario(e._id).subscribe((function(e) { console.log(e), t.cargarUsuarios() })) })) : j()("No puede borrar usuario", "No se puede borrar a si mismo", "error")
                    }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.cambiarDesde = function(e) {
                        var t = JSON.parse(localStorage.getItem("desdeu")) + e;
                        t >= this.totalRegistros || t < 0 || (this._usuarioService.guardardesdeStorage(t), this.cargarUsuarios())
                    }, e.ctorParameters = function() { return [{ type: _.k }, { type: _.f }] }, e = C([Object(n.n)({ selector: "app-usuarios", template: F(a("S13f")).default }), R("design:paramtypes", [_.k, _.f])], e)
                }(),
                E = function(e, t, a, n) { this.nombre = e, this.img = t, this.usuario = a, this._id = n },
                I = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                z = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                N = function(e) { return e && e.__esModule ? e : { default: e } },
                B = function() {
                    function e(e, t) { this._hospitalService = e, this._modalUploadService = t, this.hospitales = [], this.desde = 0, this.totalRegistros = 0, this.cargando = !0 }
                    return e.prototype.ngOnInit = function() {
                        var e = this;
                        this.cargarHospitales(), this._modalUploadService.notificacion.subscribe((function() { return e.cargarHospitales() }))
                    }, e.prototype.cargarHospitales = function() {
                        var e = this;
                        this._hospitalService.cargarHospitales().subscribe((function(t) { e.totalRegistros = t.total, e.hospitales = t.hospitales, e.cargando = !1 }))
                    }, e.prototype.crearHospital = function() {
                        var e = this;
                        j()({ title: "Ingrese nuevo nombre:", text: "Ingrese el nombre del hospital", content: { element: "input", attributes: { placeholder: "Nombre de hospital" } }, buttons: ["Mejor no!", !0] }).then((function(t) {
                            if (t) {
                                var a = new E(t);
                                e._hospitalService.crearHospital(a).subscribe((function() { return e.cargarHospitales() }))
                            }
                        }))
                    }, e.prototype.buscarHospital = function(e) {
                        var t = this;
                        e.length <= 0 ? this.cargarHospitales() : (this.cargando = !0, this._hospitalService.buscarHospitales(e).subscribe((function(e) { t.totalRegistros = null, t.hospitales = e, t.cargando = !1 })))
                    }, e.prototype.cambiarNombre = function(e) { j()({ title: "Nombre hospital:", text: "CAMBIAR A", content: { element: "input", attributes: { value: e.nombre } }, buttons: ["Mejor no!", !0] }).then((function(t) { t && (e.nombre = t) })) }, e.prototype.guardarHospital = function(e) {
                        var t = this;
                        this._hospitalService.actualizarHospital(e).subscribe((function() { return t.cargarHospitales() }))
                    }, e.prototype.borrarHospital = function(e) {
                        var t = this;
                        this._hospitalService.borrarHospital(e._id).subscribe((function() { return t.cargarHospitales() }))
                    }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("hospitales", e) }, e.prototype.cambiarDesde = function(e) {
                        var t = JSON.parse(localStorage.getItem("desdeh")) + e;
                        t >= this.totalRegistros || t < 0 || (this._hospitalService.guardardesdeStorage(t), this.cargarHospitales())
                    }, e.ctorParameters = function() { return [{ type: _.c }, { type: _.f }] }, e = I([Object(n.n)({ selector: "app-hospitales", template: N(a("7PS+")).default }), z("design:paramtypes", [_.c, _.f])], e)
                }(),
                V = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                U = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                J = function(e) { return e && e.__esModule ? e : { default: e } },
                G = function() {
                    function e(e) { this._medicoService = e, this.medicos = [], this.desde = 0, this.cargando = !0 }
                    return e.prototype.ngOnInit = function() { this.cargarMedicos() }, e.prototype.cargarMedicos = function() {
                        var e = this;
                        this._medicoService.cargarMedico().subscribe((function(t) { e.medicos = t, e.cargando = !1 }))
                    }, e.prototype.buscarMedico = function(e) {
                        var t = this;
                        e.length <= 0 ? this.cargarMedicos() : (this.cargando = !0, this._medicoService.buscarMedicos(e).subscribe((function(e) { t._medicoService.totalMedicos = null, t.medicos = e, t.cargando = !1 })))
                    }, e.prototype.borrarMedico = function(e) {
                        var t = this;
                        this._medicoService.borrarMedico(e._id).subscribe((function() { return t.cargarMedicos() }))
                    }, e.prototype.cambiarDesde = function(e) {
                        var t = JSON.parse(localStorage.getItem("desdem")) + e;
                        t >= this._medicoService.totalMedicos || t < 0 || (this._medicoService.guardardesdeStorage(t), this.cargarMedicos())
                    }, e.ctorParameters = function() { return [{ type: _.e }] }, e = V([Object(n.n)({ selector: "app-medicos", template: J(a("oPEy")).default }), U("design:paramtypes", [_.e])], e)
                }(),
                q = function(e, t, a, n, r) { this.nombre = e, this.img = t, this.usuario = a, this.hospital = n, this._id = r },
                K = a("7k1j"),
                $ = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                Z = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                X = function(e) { return e && e.__esModule ? e : { default: e } },
                Q = function() {
                    function e(e, t, a, n, r) {
                        var i = this;
                        this._medicoService = e, this._hospitalService = t, this.router = a, this.activatedRoute = n, this._modalUploadService = r, this.hospitales = [], this.medico = new q("", "", "", "", ""), this.hospital = new E(""), n.params.subscribe((function(e) { var t = e.id; "nuevo" !== t && i.cargarMedicoid(t) }))
                    }
                    return e.prototype.ngOnInit = function() {
                        var e = this;
                        this._hospitalService.cargarHospitales().subscribe((function(t) { return e.hospitales = t.hospitales })), this._modalUploadService.notificacion.subscribe((function(t) { e.medico.img = t.medico.img }))
                    }, e.prototype.guardarMedico = function(e) {
                        var t = this;
                        console.log(e.valid), console.log(e.value), e.invalid || this._medicoService.guardarMedico(this.medico).subscribe((function(e) { t.medico._id = e._id, t.router.navigate(["/*/medico", e._id]) }))
                    }, e.prototype.cambioHospital = function(e) {
                        var t = this;
                        this._hospitalService.obtenerHospital(e).subscribe((function(e) { return t.hospital = e }))
                    }, e.prototype.cargarMedicoid = function(e) {
                        var t = this;
                        this._medicoService.cargarMedicoid(e).subscribe((function(e) { console.log(e), t.medico = e, t.medico.hospital = e.hospital._id, t.cambioHospital(t.medico.hospital) }))
                    }, e.prototype.cambiarFoto = function() { this._modalUploadService.mostrarModal("medicos", this.medico._id) }, e.ctorParameters = function() { return [{ type: _.e }, { type: _.c }, { type: r.c }, { type: r.a }, { type: K.a }] }, e = $([Object(n.n)({ selector: "app-medico", template: X(a("WAV+")).default }), Z("design:paramtypes", [_.e, _.c, r.c, r.a, K.a])], e)
                }(),
                ee = a("t/Na"),
                te = a("0np6"),
                ae = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                ne = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                re = function(e) { return e && e.__esModule ? e : { default: e } },
                ie = function() {
                    function e(e, t) {
                        var a = this;
                        this.activatedRoute = e, this.http = t, this.usuarios = [], this.medicos = [], this.hospitales = [], e.params.subscribe((function(e) {
                            var t = e.termino;
                            a.buscar(t)
                        }))
                    }
                    return e.prototype.ngOnInit = function() {}, e.prototype.buscar = function(e) {
                        var t = this,
                            a = te.a + "/busqueda/todo/" + e;
                        this.http.get(a).subscribe((function(e) { console.log(e), t.hospitales = e.hospitales, t.medicos = e.medicos, t.usuarios = e.usuarios }))
                    }, e.ctorParameters = function() { return [{ type: r.a }, { type: ee.a }] }, e = ae([Object(n.n)({ selector: "app-busqueda", template: re(a("KVSu")).default }), ne("design:paramtypes", [r.a, ee.a])], e)
                }(),
                se = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                oe = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                de = function(e) { return e && e.__esModule ? e : { default: e } },
                le = function() {
                    function e(e, t, a, n, r, i) { this._chatService = e, this._usuarioService = t, this._modalUploadService = a, this._wsService = n, this.router = r, this.activatedRoute = i, this.textoUser = "", this.usuarios = [], this.cargando = !0, this.totalRegistros = 0, this.progreso = 20, this.progreso1 = 20, i.params.subscribe((function(e) { e.id })) }
                    return e.prototype.ngOnInit = function() {
                        var e = this;
                        this.nombre = this._usuarioService.usuario.nombre, this.sala = this._usuarioService.usuario.sala, this.img = this._usuarioService.usuario.img, this._wsService.entrarChat(this.nombre, this.sala, this.img), this.usuariosala = this._usuarioService.usuario, this._chatService.emitirSalasActivas(), this.usuariosSubscription = this._chatService.getSalasActivas().subscribe((function(t) { e.salas = t, console.log("salas en mens.comp", e.salas) })), this.elemento = document.getElementById("divUsuarios"), this._chatService.emitirUsuariosActivos(this.sala), this.usuariosSubscription = this._chatService.getUsuariosActivos().subscribe((function(t) { void 0 === t && (t = []), e.usuarios = t, console.log("usuarios en mens.comp", e.usuarios) }))
                    }, e.prototype.ngOnDestroy = function() { this.usuariosSubscription.unsubscribe() }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios1", e) }, e.prototype.buscar = function() { 0 !== this.textoUser.trim().length && (this._chatService.focusBuscar(this.textoUser), this.textoUser = "") }, e.prototype.seleccionSala = function(e) {
                        var t = this;
                        console.log(e.value), e.value && (console.log("this.usuariosala", this.usuariosala), this._usuarioService.seleccionSala({ usuario: this.usuariosala, sala: e.value.sala }).subscribe((function(a) { t.sala = a, console.log("sañla:", t.sala, e.value.sala) })))
                    }, e.prototype.cambioSala = function(e) {
                        var t = this;
                        console.log("Usuarios de sala:", e), this._chatService.emitirUsuariosActivos(e), this.usuariosSubscription = this._chatService.getUsuariosActivos().subscribe((function(e) { void 0 === e && (e = []), t.usuarios = e, console.log("usuarios", t.usuarios) }))
                    }, e.prototype.salir = function() { this._chatService.logoutChatS() }, e.ctorParameters = function() { return [{ type: _.b }, { type: _.k }, { type: _.f }, { type: _.m }, { type: r.c }, { type: r.a }] }, e = se([Object(n.n)({ selector: "app-mensajes", template: de(a("0LZZ")).default, styles: [de(a("e0lI")).default] }), oe("design:paramtypes", [_.b, _.k, _.f, _.m, r.c, r.a])], e)
                }(),
                ue = [{ path: "dashboard", component: d, canActivate: [_.l], data: { titulo: "Dashboard" } }, { path: "graficas1", component: h, data: { titulo: "Graficas" } }, { path: "promesas", component: b, data: { titulo: "Promesas" } }, { path: "rxjs", component: T, data: { titulo: "RxJs" } }, { path: "mensajes", component: le, data: { titulo: "Mensajes" } }, { path: "account-settings", component: g, data: { titulo: "Ajustes" } }, { path: "perfil", component: A, data: { titulo: "Perfil" } }, { path: "busqueda/:termino", component: ie, data: { titulo: "Buscador" } }, { path: "usuarios", component: W, canActivate: [_.a], data: { titulo: "mantenimiento de usuario" } }, { path: "hospitales", component: B, data: { titulo: "mantenimiento de hospital" } }, { path: "medicos", component: G, data: { titulo: "mantenimiento de medico" } }, { path: "medico/:id", component: Q, data: { titulo: "Actualizar medico" } }, { path: "", redirectTo: "/dashboard", pathMatch: "full" }],
                ce = r.d.forChild(ue),
                he = a("PCNd"),
                _e = a("gIcY"),
                me = a("Ip0R"),
                fe = a("mrSG"),
                pe = a("MO+k"),
                ge = a("26FU");
            var ye = function() { this.__data__ = [], this.size = 0 };
            var Me = function(e, t) { return e === t || e != e && t != t };
            var ve = function(e, t) {
                    for (var a = e.length; a--;)
                        if (Me(e[a][0], t)) return a;
                    return -1
                },
                be = Array.prototype.splice;
            var Le = function(e) {
                var t = this.__data__,
                    a = ve(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : be.call(t, a, 1), --this.size, !0)
            };
            var Ye = function(e) {
                var t = this.__data__,
                    a = ve(t, e);
                return a < 0 ? void 0 : t[a][1]
            };
            var ke = function(e) { return ve(this.__data__, e) > -1 };
            var De = function(e, t) {
                var a = this.__data__,
                    n = ve(a, e);
                return n < 0 ? (++this.size, a.push([e, t])) : a[n][1] = t, this
            };

            function we(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            we.prototype.clear = ye, we.prototype.delete = Le, we.prototype.get = Ye, we.prototype.has = ke, we.prototype.set = De;
            var xe = we;
            var Te = function() { this.__data__ = new xe, this.size = 0 };
            var Se = function(e) {
                var t = this.__data__,
                    a = t.delete(e);
                return this.size = t.size, a
            };
            var je = function(e) { return this.__data__.get(e) };
            var He = function(e) { return this.__data__.has(e) },
                Pe = a("Ju5/"),
                Oe = Pe.a.Symbol,
                Ae = Object.prototype,
                Ce = Ae.hasOwnProperty,
                Re = Ae.toString,
                Fe = Oe ? Oe.toStringTag : void 0;
            var We = function(e) {
                    var t = Ce.call(e, Fe),
                        a = e[Fe];
                    try { e[Fe] = void 0; var n = !0 } catch (i) {}
                    var r = Re.call(e);
                    return n && (t ? e[Fe] = a : delete e[Fe]), r
                },
                Ee = Object.prototype.toString;
            var Ie = function(e) { return Ee.call(e) },
                ze = Oe ? Oe.toStringTag : void 0;
            var Ne = function(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ze && ze in Object(e) ? We(e) : Ie(e) };
            var Be = function(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) };
            var Ve, Ue = function(e) { if (!Be(e)) return !1; var t = Ne(e); return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t },
                Je = Pe.a["__core-js_shared__"],
                Ge = (Ve = /[^.]+$/.exec(Je && Je.keys && Je.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ve : "";
            var qe = function(e) { return !!Ge && Ge in e },
                Ke = Function.prototype.toString;
            var $e = function(e) { if (null != e) { try { return Ke.call(e) } catch (t) {} try { return e + "" } catch (t) {} } return "" },
                Ze = /^\[object .+?Constructor\]$/,
                Xe = Function.prototype,
                Qe = Object.prototype,
                et = Xe.toString,
                tt = Qe.hasOwnProperty,
                at = RegExp("^" + et.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            var nt = function(e) { return !(!Be(e) || qe(e)) && (Ue(e) ? at : Ze).test($e(e)) };
            var rt = function(e, t) { return null == e ? void 0 : e[t] };
            var it = function(e, t) { var a = rt(e, t); return nt(a) ? a : void 0 },
                st = it(Pe.a, "Map"),
                ot = it(Object, "create");
            var dt = function() { this.__data__ = ot ? ot(null) : {}, this.size = 0 };
            var lt = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t },
                ut = Object.prototype.hasOwnProperty;
            var ct = function(e) { var t = this.__data__; if (ot) { var a = t[e]; return "__lodash_hash_undefined__" === a ? void 0 : a } return ut.call(t, e) ? t[e] : void 0 },
                ht = Object.prototype.hasOwnProperty;
            var _t = function(e) { var t = this.__data__; return ot ? void 0 !== t[e] : ht.call(t, e) };
            var mt = function(e, t) { var a = this.__data__; return this.size += this.has(e) ? 0 : 1, a[e] = ot && void 0 === t ? "__lodash_hash_undefined__" : t, this };

            function ft(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            ft.prototype.clear = dt, ft.prototype.delete = lt, ft.prototype.get = ct, ft.prototype.has = _t, ft.prototype.set = mt;
            var pt = ft;
            var gt = function() { this.size = 0, this.__data__ = { hash: new pt, map: new(st || xe), string: new pt } };
            var yt = function(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e };
            var Mt = function(e, t) { var a = e.__data__; return yt(t) ? a["string" == typeof t ? "string" : "hash"] : a.map };
            var vt = function(e) { var t = Mt(this, e).delete(e); return this.size -= t ? 1 : 0, t };
            var bt = function(e) { return Mt(this, e).get(e) };
            var Lt = function(e) { return Mt(this, e).has(e) };
            var Yt = function(e, t) {
                var a = Mt(this, e),
                    n = a.size;
                return a.set(e, t), this.size += a.size == n ? 0 : 1, this
            };

            function kt(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            kt.prototype.clear = gt, kt.prototype.delete = vt, kt.prototype.get = bt, kt.prototype.has = Lt, kt.prototype.set = Yt;
            var Dt = kt;
            var wt = function(e, t) {
                var a = this.__data__;
                if (a instanceof xe) {
                    var n = a.__data__;
                    if (!st || n.length < 199) return n.push([e, t]), this.size = ++a.size, this;
                    a = this.__data__ = new Dt(n)
                }
                return a.set(e, t), this.size = a.size, this
            };

            function xt(e) {
                var t = this.__data__ = new xe(e);
                this.size = t.size
            }
            xt.prototype.clear = Te, xt.prototype.delete = Se, xt.prototype.get = je, xt.prototype.has = He, xt.prototype.set = wt;
            var Tt = xt;
            var St = function(e, t) { for (var a = -1, n = null == e ? 0 : e.length; ++a < n && !1 !== t(e[a], a, e);); return e },
                jt = function() { try { var e = it(Object, "defineProperty"); return e({}, "", {}), e } catch (t) {} }();
            var Ht = function(e, t, a) { "__proto__" == t && jt ? jt(e, t, { configurable: !0, enumerable: !0, value: a, writable: !0 }) : e[t] = a },
                Pt = Object.prototype.hasOwnProperty;
            var Ot = function(e, t, a) {
                var n = e[t];
                Pt.call(e, t) && Me(n, a) && (void 0 !== a || t in e) || Ht(e, t, a)
            };
            var At = function(e, t, a, n) {
                var r = !a;
                a || (a = {});
                for (var i = -1, s = t.length; ++i < s;) {
                    var o = t[i],
                        d = n ? n(a[o], e[o], o, a, e) : void 0;
                    void 0 === d && (d = e[o]), r ? Ht(a, o, d) : Ot(a, o, d)
                }
                return a
            };
            var Ct = function(e, t) { for (var a = -1, n = Array(e); ++a < e;) n[a] = t(a); return n };
            var Rt = function(e) { return null != e && "object" == typeof e };
            var Ft = function(e) { return Rt(e) && "[object Arguments]" == Ne(e) },
                Wt = Object.prototype,
                Et = Wt.hasOwnProperty,
                It = Wt.propertyIsEnumerable,
                zt = Ft(function() { return arguments }()) ? Ft : function(e) { return Rt(e) && Et.call(e, "callee") && !It.call(e, "callee") },
                Nt = Array.isArray,
                Bt = a("WOAq"),
                Vt = /^(?:0|[1-9]\d*)$/;
            var Ut = function(e, t) { var a = typeof e; return !!(t = null == t ? 9007199254740991 : t) && ("number" == a || "symbol" != a && Vt.test(e)) && e > -1 && e % 1 == 0 && e < t };
            var Jt = function(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991 },
                Gt = {};
            Gt["[object Float32Array]"] = Gt["[object Float64Array]"] = Gt["[object Int8Array]"] = Gt["[object Int16Array]"] = Gt["[object Int32Array]"] = Gt["[object Uint8Array]"] = Gt["[object Uint8ClampedArray]"] = Gt["[object Uint16Array]"] = Gt["[object Uint32Array]"] = !0, Gt["[object Arguments]"] = Gt["[object Array]"] = Gt["[object ArrayBuffer]"] = Gt["[object Boolean]"] = Gt["[object DataView]"] = Gt["[object Date]"] = Gt["[object Error]"] = Gt["[object Function]"] = Gt["[object Map]"] = Gt["[object Number]"] = Gt["[object Object]"] = Gt["[object RegExp]"] = Gt["[object Set]"] = Gt["[object String]"] = Gt["[object WeakMap]"] = !1;
            var qt = function(e) { return Rt(e) && Jt(e.length) && !!Gt[Ne(e)] };
            var Kt = function(e) { return function(t) { return e(t) } },
                $t = a("xutz"),
                Zt = $t.a && $t.a.isTypedArray,
                Xt = Zt ? Kt(Zt) : qt,
                Qt = Object.prototype.hasOwnProperty;
            var ea = function(e, t) {
                    var a = Nt(e),
                        n = !a && zt(e),
                        r = !a && !n && Object(Bt.a)(e),
                        i = !a && !n && !r && Xt(e),
                        s = a || n || r || i,
                        o = s ? Ct(e.length, String) : [],
                        d = o.length;
                    for (var l in e) !t && !Qt.call(e, l) || s && ("length" == l || r && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Ut(l, d)) || o.push(l);
                    return o
                },
                ta = Object.prototype;
            var aa = function(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || ta) };
            var na = function(e, t) { return function(a) { return e(t(a)) } },
                ra = na(Object.keys, Object),
                ia = Object.prototype.hasOwnProperty;
            var sa = function(e) { if (!aa(e)) return ra(e); var t = []; for (var a in Object(e)) ia.call(e, a) && "constructor" != a && t.push(a); return t };
            var oa = function(e) { return null != e && Jt(e.length) && !Ue(e) };
            var da = function(e) { return oa(e) ? ea(e) : sa(e) };
            var la = function(e, t) { return e && At(t, da(t), e) };
            var ua = function(e) {
                    var t = [];
                    if (null != e)
                        for (var a in Object(e)) t.push(a);
                    return t
                },
                ca = Object.prototype.hasOwnProperty;
            var ha = function(e) {
                if (!Be(e)) return ua(e);
                var t = aa(e),
                    a = [];
                for (var n in e)("constructor" != n || !t && ca.call(e, n)) && a.push(n);
                return a
            };
            var _a = function(e) { return oa(e) ? ea(e, !0) : ha(e) };
            var ma = function(e, t) { return e && At(t, _a(t), e) },
                fa = a("3/ER");
            var pa = function(e, t) {
                var a = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++a < n;) t[a] = e[a];
                return t
            };
            var ga = function(e, t) {
                for (var a = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++a < n;) {
                    var s = e[a];
                    t(s, a, e) && (i[r++] = s)
                }
                return i
            };
            var ya = function() { return [] },
                Ma = Object.prototype.propertyIsEnumerable,
                va = Object.getOwnPropertySymbols,
                ba = va ? function(e) { return null == e ? [] : (e = Object(e), ga(va(e), (function(t) { return Ma.call(e, t) }))) } : ya;
            var La = function(e, t) { return At(e, ba(e), t) };
            var Ya = function(e, t) { for (var a = -1, n = t.length, r = e.length; ++a < n;) e[r + a] = t[a]; return e },
                ka = na(Object.getPrototypeOf, Object),
                Da = Object.getOwnPropertySymbols ? function(e) { for (var t = []; e;) Ya(t, ba(e)), e = ka(e); return t } : ya;
            var wa = function(e, t) { return At(e, Da(e), t) };
            var xa = function(e, t, a) { var n = t(e); return Nt(e) ? n : Ya(n, a(e)) };
            var Ta = function(e) { return xa(e, da, ba) };
            var Sa = function(e) { return xa(e, _a, Da) },
                ja = it(Pe.a, "DataView"),
                Ha = it(Pe.a, "Promise"),
                Pa = it(Pe.a, "Set"),
                Oa = it(Pe.a, "WeakMap"),
                Aa = $e(ja),
                Ca = $e(st),
                Ra = $e(Ha),
                Fa = $e(Pa),
                Wa = $e(Oa),
                Ea = Ne;
            (ja && "[object DataView]" != Ea(new ja(new ArrayBuffer(1))) || st && "[object Map]" != Ea(new st) || Ha && "[object Promise]" != Ea(Ha.resolve()) || Pa && "[object Set]" != Ea(new Pa) || Oa && "[object WeakMap]" != Ea(new Oa)) && (Ea = function(e) {
                var t = Ne(e),
                    a = "[object Object]" == t ? e.constructor : void 0,
                    n = a ? $e(a) : "";
                if (n) switch (n) {
                    case Aa:
                        return "[object DataView]";
                    case Ca:
                        return "[object Map]";
                    case Ra:
                        return "[object Promise]";
                    case Fa:
                        return "[object Set]";
                    case Wa:
                        return "[object WeakMap]"
                }
                return t
            });
            var Ia = Ea,
                za = Object.prototype.hasOwnProperty;
            var Na = function(e) {
                    var t = e.length,
                        a = new e.constructor(t);
                    return t && "string" == typeof e[0] && za.call(e, "index") && (a.index = e.index, a.input = e.input), a
                },
                Ba = Pe.a.Uint8Array;
            var Va = function(e) { var t = new e.constructor(e.byteLength); return new Ba(t).set(new Ba(e)), t };
            var Ua = function(e, t) { var a = t ? Va(e.buffer) : e.buffer; return new e.constructor(a, e.byteOffset, e.byteLength) },
                Ja = /\w*$/;
            var Ga = function(e) { var t = new e.constructor(e.source, Ja.exec(e)); return t.lastIndex = e.lastIndex, t },
                qa = Oe ? Oe.prototype : void 0,
                Ka = qa ? qa.valueOf : void 0;
            var $a = function(e) { return Ka ? Object(Ka.call(e)) : {} };
            var Za = function(e, t) { var a = t ? Va(e.buffer) : e.buffer; return new e.constructor(a, e.byteOffset, e.length) };
            var Xa = function(e, t, a) {
                    var n = e.constructor;
                    switch (t) {
                        case "[object ArrayBuffer]":
                            return Va(e);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new n(+e);
                        case "[object DataView]":
                            return Ua(e, a);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return Za(e, a);
                        case "[object Map]":
                            return new n;
                        case "[object Number]":
                        case "[object String]":
                            return new n(e);
                        case "[object RegExp]":
                            return Ga(e);
                        case "[object Set]":
                            return new n;
                        case "[object Symbol]":
                            return $a(e)
                    }
                },
                Qa = Object.create,
                en = function() {
                    function e() {}
                    return function(t) {
                        if (!Be(t)) return {};
                        if (Qa) return Qa(t);
                        e.prototype = t;
                        var a = new e;
                        return e.prototype = void 0, a
                    }
                }();
            var tn = function(e) { return "function" != typeof e.constructor || aa(e) ? {} : en(ka(e)) };
            var an = function(e) { return Rt(e) && "[object Map]" == Ia(e) },
                nn = $t.a && $t.a.isMap,
                rn = nn ? Kt(nn) : an;
            var sn = function(e) { return Rt(e) && "[object Set]" == Ia(e) },
                on = $t.a && $t.a.isSet,
                dn = on ? Kt(on) : sn,
                ln = {};
            ln["[object Arguments]"] = ln["[object Array]"] = ln["[object ArrayBuffer]"] = ln["[object DataView]"] = ln["[object Boolean]"] = ln["[object Date]"] = ln["[object Float32Array]"] = ln["[object Float64Array]"] = ln["[object Int8Array]"] = ln["[object Int16Array]"] = ln["[object Int32Array]"] = ln["[object Map]"] = ln["[object Number]"] = ln["[object Object]"] = ln["[object RegExp]"] = ln["[object Set]"] = ln["[object String]"] = ln["[object Symbol]"] = ln["[object Uint8Array]"] = ln["[object Uint8ClampedArray]"] = ln["[object Uint16Array]"] = ln["[object Uint32Array]"] = !0, ln["[object Error]"] = ln["[object Function]"] = ln["[object WeakMap]"] = !1;
            var un = function e(t, a, n, r, i, s) {
                var o, d = 1 & a,
                    l = 2 & a,
                    u = 4 & a;
                if (n && (o = i ? n(t, r, i, s) : n(t)), void 0 !== o) return o;
                if (!Be(t)) return t;
                var c = Nt(t);
                if (c) { if (o = Na(t), !d) return pa(t, o) } else {
                    var h = Ia(t),
                        _ = "[object Function]" == h || "[object GeneratorFunction]" == h;
                    if (Object(Bt.a)(t)) return Object(fa.a)(t, d);
                    if ("[object Object]" == h || "[object Arguments]" == h || _ && !i) { if (o = l || _ ? {} : tn(t), !d) return l ? wa(t, ma(o, t)) : La(t, la(o, t)) } else {
                        if (!ln[h]) return i ? t : {};
                        o = Xa(t, h, d)
                    }
                }
                s || (s = new Tt);
                var m = s.get(t);
                if (m) return m;
                s.set(t, o), dn(t) ? t.forEach((function(r) { o.add(e(r, a, n, r, t, s)) })) : rn(t) && t.forEach((function(r, i) { o.set(i, e(r, a, n, i, t, s)) }));
                var f = u ? l ? Sa : Ta : l ? keysIn : da,
                    p = c ? void 0 : f(t);
                return St(p || t, (function(r, i) { p && (r = t[i = r]), Ot(o, i, e(r, a, n, i, t, s)) })), o
            };
            var cn = function(e) { return un(e, 5) },
                hn = [
                    [255, 99, 132],
                    [54, 162, 235],
                    [255, 206, 86],
                    [231, 233, 237],
                    [75, 192, 192],
                    [151, 187, 205],
                    [220, 220, 220],
                    [247, 70, 74],
                    [70, 191, 189],
                    [253, 180, 92],
                    [148, 159, 177],
                    [77, 83, 96]
                ];

            function _n(e, t, a) { if ("pie" === e || "doughnut" === e) return pn(Mn(a)); if ("polarArea" === e) return { backgroundColor: (n = Mn(a)).map((function(e) { return mn(e, .6) })), borderColor: n.map((function(e) { return mn(e, 1) })), hoverBackgroundColor: n.map((function(e) { return mn(e, .8) })), hoverBorderColor: n.map((function(e) { return mn(e, 1) })) }; var n; if ("line" === e || "radar" === e) return function(e) { return { backgroundColor: mn(e, .4), borderColor: mn(e, 1), pointBackgroundColor: mn(e, 1), pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: mn(e, .8) } }(yn(t)); if ("bar" === e || "horizontalBar" === e) return function(e) { return { backgroundColor: mn(e, .6), borderColor: mn(e, 1), hoverBackgroundColor: mn(e, .8), hoverBorderColor: mn(e, 1) } }(yn(t)); if ("bubble" === e) return pn(Mn(a)); if ("scatter" === e) return pn(Mn(a)); throw new Error("getColors - Unsupported chart type " + e) }

            function mn(e, t) { return "rgba(" + e.concat(t).join(",") + ")" }

            function fn(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e }

            function pn(e) { return { backgroundColor: e.map((function(e) { return mn(e, .6) })), borderColor: e.map((function() { return "#fff" })), pointBackgroundColor: e.map((function(e) { return mn(e, 1) })), pointBorderColor: e.map((function() { return "#fff" })), pointHoverBackgroundColor: e.map((function(e) { return mn(e, 1) })), pointHoverBorderColor: e.map((function(e) { return mn(e, 1) })) } }

            function gn() { return [fn(0, 255), fn(0, 255), fn(0, 255)] }

            function yn(e) { return hn[e] || gn() }

            function Mn(e) { for (var t = new Array(e), a = 0; a < e; a++) t[a] = hn[a] || gn(); return t }
            var vn = function() {
                    function e() { this.pColorschemesOptions = {}, this.colorschemesOptions = new ge.a({}) }
                    return e.prototype.setColorschemesOptions = function(e) { this.pColorschemesOptions = e, this.colorschemesOptions.next(e) }, e.prototype.getColorschemesOptions = function() { return this.pColorschemesOptions }, e.decorators = [{ type: n.A, args: [{ providedIn: "root" }] }], e.ctorParameters = function() { return [] }, e.ngInjectableDef = Object(n.nc)({ factory: function() { return new e }, token: e, providedIn: "root" }), e
                }(),
                bn = { Default: 0, Update: 1, Refresh: 2 };
            bn[bn.Default] = "Default", bn[bn.Update] = "Update", bn[bn.Refresh] = "Refresh";
            var Ln = function() {
                    function e(e, t) { this.element = e, this.themeService = t, this.options = {}, this.chartClick = new n.v, this.chartHover = new n.v, this.old = { dataExists: !1, dataLength: 0, datasetsExists: !1, datasetsLength: 0, datasetsDataObjects: [], datasetsDataLengths: [], colorsExists: !1, colors: [], labelsExist: !1, labels: [], legendExists: !1, legend: {} }, this.subs = [] }
                    return e.registerPlugin = function(e) { pe.Chart.plugins.register(e) }, e.unregisterPlugin = function(e) { pe.Chart.plugins.unregister(e) }, e.prototype.ngOnInit = function() {
                        var e = this;
                        this.ctx = this.element.nativeElement.getContext("2d"), this.refresh(), this.subs.push(this.themeService.colorschemesOptions.subscribe((function(t) { return e.themeChanged(t) })))
                    }, e.prototype.themeChanged = function(e) { this.refresh() }, e.prototype.ngDoCheck = function() {
                        var e = this;
                        if (this.chart) {
                            var t = bn.Default,
                                a = function(e) { t = e > t ? e : t };
                            switch (!!this.data !== this.old.dataExists && (this.propagateDataToDatasets(this.data), this.old.dataExists = !!this.data, a(bn.Update)), this.data && this.data.length !== this.old.dataLength && (this.old.dataLength = this.data && this.data.length || 0, a(bn.Update)), !!this.datasets !== this.old.datasetsExists && (this.old.datasetsExists = !!this.datasets, a(bn.Update)), this.datasets && this.datasets.length !== this.old.datasetsLength && (this.old.datasetsLength = this.datasets && this.datasets.length || 0, a(bn.Update)), this.datasets && this.datasets.filter((function(t, a) { return t.data !== e.old.datasetsDataObjects[a] })).length && (this.old.datasetsDataObjects = this.datasets.map((function(e) { return e.data })), a(bn.Update)), this.datasets && this.datasets.filter((function(t, a) { return t.data.length !== e.old.datasetsDataLengths[a] })).length && (this.old.datasetsDataLengths = this.datasets.map((function(e) { return e.data.length })), a(bn.Update)), !!this.colors !== this.old.colorsExists && (this.old.colorsExists = !!this.colors, this.updateColors(), a(bn.Update)), this.colors && this.colors.filter((function(t, a) { return !e.colorsEqual(t, e.old.colors[a]) })).length && (this.old.colors = this.colors.map((function(t) { return e.copyColor(t) })), this.updateColors(), a(bn.Update)), !!this.labels !== this.old.labelsExist && (this.old.labelsExist = !!this.labels, a(bn.Update)), this.labels && this.labels.filter((function(t, a) { return !e.labelsEqual(t, e.old.labels[a]) })).length && (this.old.labels = this.labels.map((function(t) { return e.copyLabel(t) })), a(bn.Update)), !!this.options.legend !== this.old.legendExists && (this.old.legendExists = !!this.options.legend, a(bn.Refresh)), this.options.legend && this.options.legend.position !== this.old.legend.position && (this.old.legend.position = this.options.legend.position, a(bn.Refresh)), t) {
                                case bn.Default:
                                    break;
                                case bn.Update:
                                    this.update();
                                    break;
                                case bn.Refresh:
                                    this.refresh()
                            }
                        }
                    }, e.prototype.copyLabel = function(e) { return Array.isArray(e) ? Object(fe.g)(e) : e }, e.prototype.labelsEqual = function(e, t) { return Array.isArray(e) === Array.isArray(t) && (Array.isArray(e) || e === t) && (!Array.isArray(e) || e.length === t.length) && (!Array.isArray(e) || 0 === e.filter((function(e, a) { return e !== t[a] })).length) }, e.prototype.copyColor = function(e) { return { backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderColor: e.borderColor, borderCapStyle: e.borderCapStyle, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderJoinStyle: e.borderJoinStyle, pointBorderColor: e.pointBorderColor, pointBackgroundColor: e.pointBackgroundColor, pointBorderWidth: e.pointBorderWidth, pointRadius: e.pointRadius, pointHoverRadius: e.pointHoverRadius, pointHitRadius: e.pointHitRadius, pointHoverBackgroundColor: e.pointHoverBackgroundColor, pointHoverBorderColor: e.pointHoverBorderColor, pointHoverBorderWidth: e.pointHoverBorderWidth, pointStyle: e.pointStyle, hoverBackgroundColor: e.hoverBackgroundColor, hoverBorderColor: e.hoverBorderColor, hoverBorderWidth: e.hoverBorderWidth } }, e.prototype.colorsEqual = function(e, t) { return !e == !t && (!e || e.backgroundColor === t.backgroundColor && e.borderWidth === t.borderWidth && e.borderColor === t.borderColor && e.borderCapStyle === t.borderCapStyle && e.borderDash === t.borderDash && e.borderDashOffset === t.borderDashOffset && e.borderJoinStyle === t.borderJoinStyle && e.pointBorderColor === t.pointBorderColor && e.pointBackgroundColor === t.pointBackgroundColor && e.pointBorderWidth === t.pointBorderWidth && e.pointRadius === t.pointRadius && e.pointHoverRadius === t.pointHoverRadius && e.pointHitRadius === t.pointHitRadius && e.pointHoverBackgroundColor === t.pointHoverBackgroundColor && e.pointHoverBorderColor === t.pointHoverBorderColor && e.pointHoverBorderWidth === t.pointHoverBorderWidth && e.pointStyle === t.pointStyle && e.hoverBackgroundColor === t.hoverBackgroundColor && e.hoverBorderColor === t.hoverBorderColor && e.hoverBorderWidth === t.hoverBorderWidth) }, e.prototype.updateColors = function() {
                        var e = this;
                        this.datasets.forEach((function(t, a) { e.colors && e.colors[a] ? Object.assign(t, e.colors[a]) : Object.assign(t, _n(e.chartType, a, t.data.length), Object(fe.a)({}, t)) }))
                    }, e.prototype.ngOnChanges = function(e) {
                        var t = bn.Default,
                            a = function(e) { t = e > t ? e : t };
                        switch (e.hasOwnProperty("data") && e.data.currentValue && (this.propagateDataToDatasets(e.data.currentValue), a(bn.Update)), e.hasOwnProperty("datasets") && e.datasets.currentValue && (this.propagateDatasetsToData(e.datasets.currentValue), a(bn.Update)), e.hasOwnProperty("labels") && (this.chart && (this.chart.data.labels = e.labels.currentValue), a(bn.Update)), e.hasOwnProperty("legend") && (this.chart && (this.chart.config.options.legend.display = e.legend.currentValue, this.chart.generateLegend()), a(bn.Update)), e.hasOwnProperty("options") && a(bn.Refresh), t) {
                            case bn.Update:
                                this.update();
                                break;
                            case bn.Refresh:
                            case bn.Default:
                                this.refresh()
                        }
                    }, e.prototype.ngOnDestroy = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach((function(e) { return e.unsubscribe() })) }, e.prototype.update = function(e, t) { if (this.chart) return this.chart.update(e, t) }, e.prototype.hideDataset = function(e, t) { this.chart.getDatasetMeta(e).hidden = t, this.chart.update() }, e.prototype.isDatasetHidden = function(e) { return this.chart.getDatasetMeta(e).hidden }, e.prototype.toBase64Image = function() { return this.chart.toBase64Image() }, e.prototype.getChartConfiguration = function() {
                        var e = this,
                            t = this.getDatasets(),
                            a = Object.assign({}, this.options);
                        !1 === this.legend && (a.legend = { display: !1 }), a.hover = a.hover || {}, a.hover.onHover || (a.hover.onHover = function(t, a) { a && !a.length || e.chartHover.emit({ event: t, active: a }) }), a.onClick || (a.onClick = function(t, a) { e.chartClick.emit({ event: t, active: a }) });
                        var n = this.smartMerge(a, this.themeService.getColorschemesOptions());
                        return { type: this.chartType, data: { labels: this.labels || [], datasets: t }, plugins: this.plugins, options: n }
                    }, e.prototype.getChartBuilder = function(e) { var t = this.getChartConfiguration(); return new pe.Chart(e, t) }, e.prototype.smartMerge = function(e, t, a) {
                        var n = this;
                        if (void 0 === a && (a = 0), 0 === a && (e = cn(e)), Object.keys(t).forEach((function(r) {
                                if (Array.isArray(t[r])) {
                                    var i = e[r];
                                    i && i.forEach((function(e) { n.smartMerge(e, t[r][0], a + 1) }))
                                } else "object" == typeof t[r] ? (r in e || (e[r] = {}), n.smartMerge(e[r], t[r], a + 1)) : e[r] = t[r]
                            })), 0 === a) return e
                    }, e.prototype.isMultiLineLabel = function(e) { return Array.isArray(e) }, e.prototype.joinLabel = function(e) { return e ? this.isMultiLineLabel(e) ? e.join(" ") : e : null }, e.prototype.propagateDatasetsToData = function(e) { this.data = this.datasets.map((function(e) { return e.data })), this.chart && (this.chart.data.datasets = e), this.updateColors() }, e.prototype.propagateDataToDatasets = function(e) {
                        var t = this;
                        this.isMultiDataSet(e) ? this.datasets && e.length === this.datasets.length ? this.datasets.forEach((function(t, a) { t.data = e[a] })) : (this.datasets = e.map((function(e, a) { return { data: e, label: t.joinLabel(t.labels[a]) || "Label " + a } })), this.chart && (this.chart.data.datasets = this.datasets)) : this.datasets ? (this.datasets[0].data = e, this.datasets.splice(1)) : (this.datasets = [{ data: e }], this.chart && (this.chart.data.datasets = this.datasets)), this.updateColors()
                    }, e.prototype.isMultiDataSet = function(e) { return Array.isArray(e[0]) }, e.prototype.getDatasets = function() { if (!this.datasets && !this.data) throw new Error("ng-charts configuration error, data or datasets field are required to render chart " + this.chartType); return this.datasets ? (this.propagateDatasetsToData(this.datasets), this.datasets) : this.data ? (this.propagateDataToDatasets(this.data), this.datasets) : void 0 }, e.prototype.refresh = function() { this.chart && (this.chart.destroy(), this.chart = void 0), this.ctx && (this.chart = this.getChartBuilder(this.ctx)) }, e.decorators = [{ type: n.s, args: [{ selector: "canvas[baseChart]", exportAs: "base-chart" }] }], e.ctorParameters = function() { return [{ type: n.t }, { type: vn }] }, e.propDecorators = { data: [{ type: n.D }], datasets: [{ type: n.D }], labels: [{ type: n.D }], options: [{ type: n.D }], chartType: [{ type: n.D }], colors: [{ type: n.D }], legend: [{ type: n.D }], plugins: [{ type: n.D }], chartClick: [{ type: n.P }], chartHover: [{ type: n.P }] }, e
                }(),
                Yn = function() {
                    function e() {}
                    return e.decorators = [{ type: n.I, args: [{ declarations: [Ln], imports: [], exports: [Ln] }] }], e
                }();
            var kn = a("iTUp"),
                Dn = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                wn = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                xn = function(e) { return e && e.__esModule ? e : { default: e } },
                Tn = function() {
                    function e() { this.doughnutChartLabels = [], this.doughnutChartData = [], this.doughnutChartType = "" }
                    return e.prototype.ngOnInit = function() {}, Dn([Object(n.D)("chartLabels"), wn("design:type", Array)], e.prototype, "doughnutChartLabels", void 0), Dn([Object(n.D)("chartData"), wn("design:type", Array)], e.prototype, "doughnutChartData", void 0), Dn([Object(n.D)("chartType"), wn("design:type", String)], e.prototype, "doughnutChartType", void 0), e = Dn([Object(n.n)({ selector: "app-grafico-dona", template: xn(a("BJEJ")).default }), wn("design:paramtypes", [])], e)
                }(),
                Sn = a("gWzw"),
                jn = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                Hn = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                Pn = function(e) { return e && e.__esModule ? e : { default: e } },
                On = function() {
                    function e(e, t, a) { this._chatService = e, this._usuarioService = t, this._modalUploadService = a, this.progreso1 = 0, this.progreso2 = 0, this.progreso1r = 0, this.progreso2r = 0, this.textoUser = "", this.texto = "", this.mensajes = [] }
                    return e.prototype.ngOnInit = function() {
                        var e = this;
                        this.elemento = document.getElementById("divChatbox"), this.mensajesSubscription = this._chatService.getMessages().subscribe((function(t) {
                            console.log("En Subscribe", t);
                            var a = t.sala,
                                n = t.de,
                                r = t.cuerpo,
                                i = new Date(t.fecha),
                                s = t.img;
                            console.log("clg de usuaSrevice.nombre", e._usuarioService.usuario.nombre), t.de === e._usuarioService.usuario.nombre && (n = "yo");
                            var o = i.getHours() + ":" + i.getMinutes();
                            e.msg = { de: n, cuerpo: r, sala: a, hora: o, img: s }, e.mensajes.push(e.msg), console.log("mensaje1", e.msg), setTimeout((function() {}), 50)
                        })), this.mensajespSubscription = this._chatService.getMessagesp().subscribe((function(t) {
                            console.log("ESPmsg", t);
                            t.sala, t.de, t.cuerpo;
                            "ignacio1" === t.de && (console.log("ignacio1"), e.progreso1 = t.cuerpo, e.progreso1r = t.cuerpo1), "ignacio2" === t.de && (console.log("ignacio2"), e.progreso2 = t.cuerpo, e.progreso2r = t.cuerpo1)
                        })), this._modalUploadService.notificacion.subscribe((function(t) { return e._usuarioService.cargarUsuarios() }))
                    }, e.prototype.ngOnDestroy = function() { this.mensajesSubscription.unsubscribe() }, e.prototype.mostrarModal = function(e) { this._modalUploadService.mostrarModal("usuarios", e) }, e.prototype.enviar = function() {
                        var e = this;
                        0 !== this.texto.trim().length && (this._chatService.sendMessage(this.texto, this._usuarioService.usuario.sala, (function(t) { e.msg = t, console.log("this.msg = ", e.msg) })), this.texto = "")
                    }, e.prototype.cambiarValor1 = function(e) { this.txtProgress.nativeElement.value = this.progreso, this.progreso >= 600 && e > 0 ? this.progreso = 600 : this.progreso <= 0 && e < 0 ? this.progreso = 0 : (this.progreso = this.progreso + e, this.cambioValor1.emit(this.progreso)) }, e.prototype.onChanges = function(e) {
                        var t = this;
                        e >= 600 ? this.progreso = 600 : this.frecuencia = e <= 0 ? 0 : e, this.txtFrecuencia.nativeElement.value = this.frecuencia, console.log("frecuencia en chatComp", this.frecuencia), this._chatService.sendFrecuencia(this.frecuencia, this._usuarioService.usuario.sala, (function(e) { t.msg = e, console.log("this.msg = ", t.msg) }))
                    }, e.prototype.onChanges1 = function(e) {
                        var t = this;
                        e >= 100 ? this.progreso = 100 : this.LongPulse = e <= 0 ? 0 : e, this.txtLongPulse.nativeElement.value = this.LongPulse, console.log("LongPulse en chatComp", this.LongPulse), this._chatService.sendLongPulse(this.LongPulse, this._usuarioService.usuario.sala, (function(e) { t.msg = e, console.log("this.msg = ", t.msg) }))
                    }, e.prototype.onChanges2 = function(e) {
                        var t = this;
                        this.dir = e >= 90 ? 90 : e <= -90 ? -90 : e, this.txtDir.nativeElement.value = this.dir, console.log("dir en chatComp", this.dir), this._chatService.sendDir(this.dir, this._usuarioService.usuario.sala, (function(e) { t.msg = e, console.log("this.msg = ", t.msg) }))
                    }, e.prototype.onChanges3 = function(e) {
                        var t = this;
                        this.sen = e >= 90 ? 90 : e <= -90 ? -90 : e, this.txtSen.nativeElement.value = this.sen, console.log("sen en chatComp", this.sen), this._chatService.sendSen(this.sen, this._usuarioService.usuario.sala, (function(e) { t.msg = e, console.log("this.msg = ", t.msg) }))
                    }, e.ctorParameters = function() { return [{ type: _.b }, { type: Sn.a }, { type: _.f }] }, jn([Object(n.kb)("txtFrecuencia", { static: !1 }), Hn("design:type", n.t)], e.prototype, "txtFrecuencia", void 0), jn([Object(n.kb)("txtDir", { static: !1 }), Hn("design:type", n.t)], e.prototype, "txtDir", void 0), jn([Object(n.kb)("txtSen", { static: !1 }), Hn("design:type", n.t)], e.prototype, "txtSen", void 0), jn([Object(n.kb)("txtLongPulse", { static: !1 }), Hn("design:type", n.t)], e.prototype, "txtLongPulse", void 0), e = jn([Object(n.n)({ selector: "app-chat", template: Pn(a("3dHE")).default, styles: [Pn(a("3tpr")).default] }), Hn("design:paramtypes", [_.b, Sn.a, _.f])], e)
                }();
            a.d(t, "PagesModule", (function() { return Cn }));
            var An = function(e, t, a, n) {
                    var r, i = arguments.length,
                        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, n);
                    else
                        for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, a, s) : r(t, a)) || s);
                    return i > 3 && s && Object.defineProperty(t, a, s), s
                },
                Cn = function() {
                    function e() {}
                    return e = An([Object(n.I)({ declarations: [d, h, Tn, g, b, T, A, W, B, G, Q, le, On, ie], exports: [d, h, On], imports: [me.b, he.a, ce, _e.c, Yn, kn.a] })], e)
                }()
        },
        "e+ae": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                    a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

                function n(e) { return e > 1 && e < 5 }

                function r(e, t, a, r) {
                    var i = e + " ";
                    switch (a) {
                        case "s":
                            return t || r ? "pár sekúnd" : "pár sekundami";
                        case "ss":
                            return t || r ? i + (n(e) ? "sekundy" : "sekúnd") : i + "sekundami";
                        case "m":
                            return t ? "minúta" : r ? "minútu" : "minútou";
                        case "mm":
                            return t || r ? i + (n(e) ? "minúty" : "minút") : i + "minútami";
                        case "h":
                            return t ? "hodina" : r ? "hodinu" : "hodinou";
                        case "hh":
                            return t || r ? i + (n(e) ? "hodiny" : "hodín") : i + "hodinami";
                        case "d":
                            return t || r ? "deň" : "dňom";
                        case "dd":
                            return t || r ? i + (n(e) ? "dni" : "dní") : i + "dňami";
                        case "M":
                            return t || r ? "mesiac" : "mesiacom";
                        case "MM":
                            return t || r ? i + (n(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                        case "y":
                            return t || r ? "rok" : "rokom";
                        case "yy":
                            return t || r ? i + (n(e) ? "roky" : "rokov") : i + "rokmi"
                    }
                }
                e.defineLocale("sk", {
                    months: t,
                    monthsShort: a,
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo štvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulú nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[minulý] dddd [o] LT";
                                case 3:
                                    return "[minulú stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [o] LT";
                                case 6:
                                    return "[minulú sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "pred %s", s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        e0lI: function(e, t, a) {
            "use strict";
            a.r(t), t.default = ""
        },
        fzPg: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", ss: "aayá %d", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        gVVK: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = e + " ";
                    switch (a) {
                        case "s":
                            return t || n ? "nekaj sekund" : "nekaj sekundami";
                        case "ss":
                            return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund";
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
                        case "d":
                            return t || n ? "en dan" : "enim dnem";
                        case "dd":
                            return r += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
                        case "M":
                            return t || n ? "en mesec" : "enim mesecem";
                        case "MM":
                            return r += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
                        case "y":
                            return t || n ? "eno leto" : "enim letom";
                        case "yy":
                            return r += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
                    }
                }
                e.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[včeraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prejšnjo] [nedeljo] [ob] LT";
                                case 3:
                                    return "[prejšnjo] [sredo] [ob] LT";
                                case 6:
                                    return "[prejšnjo] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prejšnji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "čez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        gekB: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                    a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

                function n(e, n, r, i) {
                    var s = "";
                    switch (r) {
                        case "s":
                            return i ? "muutaman sekunnin" : "muutama sekunti";
                        case "ss":
                            return i ? "sekunnin" : "sekuntia";
                        case "m":
                            return i ? "minuutin" : "minuutti";
                        case "mm":
                            s = i ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return i ? "tunnin" : "tunti";
                        case "hh":
                            s = i ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return i ? "päivän" : "päivä";
                        case "dd":
                            s = i ? "päivän" : "päivää";
                            break;
                        case "M":
                            return i ? "kuukauden" : "kuukausi";
                        case "MM":
                            s = i ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return i ? "vuoden" : "vuosi";
                        case "yy":
                            s = i ? "vuoden" : "vuotta"
                    }
                    return s = function(e, n) { return e < 10 ? n ? a[e] : t[e] : e }(e, i) + " " + s
                }
                e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        gjCT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                    a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };
                e.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) { return a[e] })).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })).replace(/,/g, "،") }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        hKrs: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("bg", {
                    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[Днес в] LT",
                        nextDay: "[Утре в] LT",
                        nextWeek: "dddd [в] LT",
                        lastDay: "[Вчера в] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[Миналата] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Миналия] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", ss: "%d секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            a = e % 100;
                        return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        honF: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
                    a = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };
                e.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", ss: "%d စက္ကန့်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function(e) { return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        iEDd: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function() { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        iYuL: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t }, monthsRegex: r, monthsShortRegex: r, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 }, invalidDate: "Fecha invalida" })
            }(a("wd/R"))
        },
        jUeY: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("el", {
                    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                    months: function(e, t) { return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl },
                    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                    meridiem: function(e, t, a) { return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ" },
                    isPM: function(e) { return "μ" === (e + "").toLowerCase()[0] },
                    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                    longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
                    calendarEl: {
                        sameDay: "[Σήμερα {}] LT",
                        nextDay: "[Αύριο {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[Χθες {}] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 6:
                                    return "[το προηγούμενο] dddd [{}] LT";
                                default:
                                    return "[την προηγούμενη] dddd [{}] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    calendar: function(e, t) {
                        var a, n = this._calendarEl[e],
                            r = t && t.hours();
                        return a = n, ("undefined" != typeof Function && a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", r % 12 == 1 ? "στη" : "στις")
                    },
                    relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", ss: "%d δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" },
                    dayOfMonthOrdinalParse: /\d{1,2}η/,
                    ordinal: "%dη",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        jVdC: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                    a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

                function n(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

                function r(e, t, a) {
                    var r = e + " ";
                    switch (a) {
                        case "ss":
                            return r + (n(e) ? "sekundy" : "sekund");
                        case "m":
                            return t ? "minuta" : "minutę";
                        case "mm":
                            return r + (n(e) ? "minuty" : "minut");
                        case "h":
                            return t ? "godzina" : "godzinę";
                        case "hh":
                            return r + (n(e) ? "godziny" : "godzin");
                        case "MM":
                            return r + (n(e) ? "miesiące" : "miesięcy");
                        case "yy":
                            return r + (n(e) ? "lata" : "lat")
                    }
                }
                e.defineLocale("pl", {
                    months: function(e, n) { return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W niedzielę o] LT";
                                case 2:
                                    return "[We wtorek o] LT";
                                case 3:
                                    return "[W środę o] LT";
                                case 6:
                                    return "[W sobotę o] LT";
                                default:
                                    return "[W] dddd [o] LT"
                            }
                        },
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszłą niedzielę o] LT";
                                case 3:
                                    return "[W zeszłą środę o] LT";
                                case 6:
                                    return "[W zeszłą sobotę o] LT";
                                default:
                                    return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: r, m: r, mm: r, h: r, hh: r, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: r, y: "rok", yy: r },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        jfSC: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
                    a = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };
                e.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function(e) { return /بعد از ظهر/.test(e) }, meridiem: function(e, t, a) { return e < 12 ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", ss: "%d ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/[۰-۹]/g, (function(e) { return a[e] })).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })).replace(/,/g, "،") }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        jnO4: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                    a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
                    n = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    r = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
                    i = function(e) {
                        return function(t, a, i, s) {
                            var o = n(t),
                                d = r[e][n(t)];
                            return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                        }
                    },
                    s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar", { months: s, monthsShort: s, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: i("s"), ss: i("s"), m: i("m"), mm: i("m"), h: i("h"), hh: i("h"), d: i("d"), dd: i("d"), M: i("M"), MM: i("M"), y: i("y"), yy: i("y") }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) { return a[e] })).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        kEOa: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
                    a = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };
                e.defineLocale("bn", { months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", ss: "%d সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function(e) { return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) { return a[e] })) }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return t[e] })) }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e }, meridiem: function(e, t, a) { return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত" }, week: { dow: 0, doy: 6 } })
            }(a("wd/R"))
        },
        kOpN: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-tw", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上" },
                    calendar: { sameDay: "[今天] LT", nextDay: "[明天] LT", nextWeek: "[下]dddd LT", lastDay: "[昨天] LT", lastWeek: "[上]dddd LT", sameElse: "L" },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: { future: "%s後", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }
                })
            }(a("wd/R"))
        },
        l5ep: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var t = ""; return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        lLLy: function(e, t, a) {
            "use strict";
            a.r(t), t.default = "<p>\n  rxjs works!\n</p>\n"
        },
        lXzo: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) { var n, r, i; return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[a], r = +e, i = n.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) }
                var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
                e.defineLocale("ru", {
                    months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") },
                    monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") },
                    weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/ },
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" },
                    calendar: {
                        sameDay: "[Сегодня, в] LT",
                        nextDay: "[Завтра, в] LT",
                        lastDay: "[Вчера, в] LT",
                        nextWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[В следующее] dddd, [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В следующий] dddd, [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В следующую] dddd, [в] LT"
                            }
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[В прошлое] dddd, [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В прошлый] dddd, [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В прошлую] dddd, [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", ss: t, m: t, mm: t, h: "час", hh: t, d: "день", dd: t, M: "месяц", MM: t, y: "год", yy: t },
                    meridiemParse: /ночи|утра|дня|вечера/i,
                    isPM: function(e) { return /^(дня|вечера)$/.test(e) },
                    meridiem: function(e, t, a) { return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            case "w":
                            case "W":
                                return e + "-я";
                            default:
                                return e
                        }
                    },
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        lYtQ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    switch (a) {
                        case "s":
                            return t ? "хэдхэн секунд" : "хэдхэн секундын";
                        case "ss":
                            return e + (t ? " секунд" : " секундын");
                        case "m":
                        case "mm":
                            return e + (t ? " минут" : " минутын");
                        case "h":
                        case "hh":
                            return e + (t ? " цаг" : " цагийн");
                        case "d":
                        case "dd":
                            return e + (t ? " өдөр" : " өдрийн");
                        case "M":
                        case "MM":
                            return e + (t ? " сар" : " сарын");
                        case "y":
                        case "yy":
                            return e + (t ? " жил" : " жилийн");
                        default:
                            return e
                    }
                }
                e.defineLocale("mn", {
                    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" },
                    meridiemParse: /ҮӨ|ҮХ/i,
                    isPM: function(e) { return "ҮХ" === e },
                    meridiem: function(e, t, a) { return e < 12 ? "ҮӨ" : "ҮХ" },
                    calendar: { sameDay: "[Өнөөдөр] LT", nextDay: "[Маргааш] LT", nextWeek: "[Ирэх] dddd LT", lastDay: "[Өчигдөр] LT", lastWeek: "[Өнгөрсөн] dddd LT", sameElse: "L" },
                    relativeTime: { future: "%s дараа", past: "%s өмнө", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " өдөр";
                            default:
                                return e
                        }
                    }
                })
            }(a("wd/R"))
        },
        lgnt: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };
                e.defineLocale("ky", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кечээ саат] LT", lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT", sameElse: "L" },
                    relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", ss: "%d секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            n = e >= 100 ? 100 : null;
                        return e + (t[e] || t[a] || t[n])
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        lyxo: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) { var n = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[a] }
                e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", ss: t, m: "un minut", mm: t, h: "o oră", hh: t, d: "o zi", dd: t, M: "o lună", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        nyYc: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
                    calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" },
                    relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + (1 === e ? "er" : "");
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                            case "W":
                                return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: { dow: 1, doy: 4 }
                })
            }(a("wd/R"))
        },
        o1bE: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
                    a = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
                    n = function(e) {
                        return function(n, r, i, s) {
                            var o = t(n),
                                d = a[e][t(n)];
                            return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, n)
                        }
                    },
                    r = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-dz", { months: r, monthsShort: r, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, a) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: n("s"), ss: n("s"), m: n("m"), mm: n("m"), h: n("h"), hh: n("h"), d: n("d"), dd: n("d"), M: n("M"), MM: n("M"), y: n("y"), yy: n("y") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 0, doy: 4 } })
            }(a("wd/R"))
        },
        oPEy: function(e, t, a) {
            "use strict";
            a.r(t), t.default = '<div class="row animated fadeIn">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <input #input (keyup)="buscarMedico( input.value )" type="text" class="form-control" placeholder="Buscar medico...">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-12">\n        <div class="card">\n            <div class="card-body">\n\n                <h3 class="card-title">Medicos registrados ( <small>{{ this._medicoService.totalMedicos }}</small> )</h3>\n\n                <div class="text-right">\n                    <button [routerLink]="[\'/*/medico\',\'nuevo\']" class="btn waves-effect waves-light btn-rounded btn-primary">\n                  <i class="fa fa-plus"></i>\n                  Crear Medico\n              </button>\n                </div>\n\n                <table class="table table-hover">\n                    <thead>\n                        <tr>\n                            <th>Foto</th>\n                            <th>Medico</th>\n                            <th>Hospital</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor="let medico of medicos">\n                            <td>\n                                <img [src]="medico.img | imagen:\'medico\'" class="img-50 img-circle">\n                            </td>\n                            <td>\n                                {{medico.nombre}}\n                            </td>\n                            <td>\n                                {{medico.hospital}}\n                            </td>\n                            <td>\n                                <button [routerLink]="[\'/*/medico\', medico._id]" class="btn btn-primary">\n                                <i class="fa fa-edit"></i>\n                              </button>\n\n                                <button (click)="borrarMedico( medico )" class="btn btn-primary">\n                                  <i class="fa fa-trash-o"></i>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <button (click)="cambiarDesde(-5)" class="btn btn-secondary">\n                    Anteriores\n                  </button>\n\n                <button (click)="cambiarDesde(5)" class="btn btn-secondary">\n                    Siguientes\n                  </button>\n            </div>\n        </div>\n    </div>\n</div>'
        },
        "p/rL": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, calendar: { sameDay: "[Bi lɛrɛ] LT", nextDay: "[Sini lɛrɛ] LT", nextWeek: "dddd [don lɛrɛ] LT", lastDay: "[Kunu lɛrɛ] LT", lastWeek: "dddd [tɛmɛnen lɛrɛ] LT", sameElse: "L" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        qvJo: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"], ss: [e + " सॅकंडांनी", e + " सॅकंड"], m: ["एका मिणटान", "एक मिनूट"], mm: [e + " मिणटांनी", e + " मिणटां"], h: ["एका वरान", "एक वर"], hh: [e + " वरांनी", e + " वरां"], d: ["एका दिसान", "एक दीस"], dd: [e + " दिसांनी", e + " दीस"], M: ["एका म्हयन्यान", "एक म्हयनो"], MM: [e + " म्हयन्यानी", e + " म्हयने"], y: ["एका वर्सान", "एक वर्स"], yy: [e + " वर्सांनी", e + " वर्सां"] }; return n ? r[a][0] : r[a][1] }
                e.defineLocale("gom-deva", {
                    months: { standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"), isFormat: /MMMM(\s)+D[oD]?/ },
                    monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                    weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                    weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "A h:mm [वाजतां]", LTS: "A h:mm:ss [वाजतां]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [वाजतां]", LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]", llll: "ddd, D MMM YYYY, A h:mm [वाजतां]" },
                    calendar: { sameDay: "[आयज] LT", nextDay: "[फाल्यां] LT", nextWeek: "[फुडलो] dddd[,] LT", lastDay: "[काल] LT", lastWeek: "[फाटलो] dddd[,] LT", sameElse: "L" },
                    relativeTime: { future: "%s", past: "%s आदीं", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
                    dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + "वेर";
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                            case "w":
                            case "W":
                                return e
                        }
                    },
                    week: { dow: 1, doy: 4 },
                    meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                    meridiemHour: function(e, t) { return 12 === e && (e = 0), "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0 },
                    meridiem: function(e, t, a) { return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती" }
                })
            }(a("wd/R"))
        },
        raLr: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) { var n, r, i; return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = { ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: t ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[a], r = +e, i = n.split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]) }

                function a(e) { return function() { return e + "о" + (11 === this.hours() ? "б" : "") + "] LT" } }
                e.defineLocale("uk", {
                    months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") },
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: function(e, t) { var a = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") }; return !0 === e ? a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1)) : e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative },
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" },
                    calendar: {
                        sameDay: a("[Сьогодні "),
                        nextDay: a("[Завтра "),
                        lastDay: a("[Вчора "),
                        nextWeek: a("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return a("[Минулої] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return a("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", ss: t, m: t, mm: t, h: "годину", hh: t, d: "день", dd: t, M: "місяць", MM: t, y: "рік", yy: t },
                    meridiemParse: /ночі|ранку|дня|вечора/,
                    isPM: function(e) { return /^(дня|вечора)$/.test(e) },
                    meridiem: function(e, t, a) { return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора" },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            default:
                                return e
                        }
                    },
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        },
        "s+uk": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[a][0] : r[a][1] }
                e.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        sp3z: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function(e) { return "ຕອນແລງ" === e }, meridiem: function(e, t, a) { return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ" }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", ss: "%d ວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function(e) { return "ທີ່" + e } })
            }(a("wd/R"))
        },
        "t+mt": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-sg", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") }, week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        tGlX: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[a][0] : r[a][1] }
                e.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        tT3J: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        tUCv: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, a) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } })
            }(a("wd/R"))
        },
        u3GI: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? r[a][0] : r[a][1] }
                e.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        uEye: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        uXwI: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { ss: "sekundes_sekundēm_sekunde_sekundes".split("_"), m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

                function a(e, t, a) { return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1] }

                function n(e, n, r) { return e + " " + a(t[r], e, n) }

                function r(e, n, r) { return a(t[r], e, n) }
                e.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: function(e, t) { return t ? "dažas sekundes" : "dažām sekundēm" }, ss: n, m: r, mm: n, h: r, hh: n, d: r, dd: n, M: r, MM: n, y: r, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        wQk9: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", ss: "%d ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } })
            }(a("wd/R"))
        },
        "wd/R": function(e, t, a) {
            (function(e) {
                e.exports = function() {
                    "use strict";
                    var t, n;

                    function r() { return t.apply(null, arguments) }

                    function i(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

                    function s(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

                    function o(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

                    function d(e) {
                        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                        var t;
                        for (t in e)
                            if (o(e, t)) return !1;
                        return !0
                    }

                    function l(e) { return void 0 === e }

                    function u(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

                    function c(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

                    function h(e, t) { var a, n = []; for (a = 0; a < e.length; ++a) n.push(t(e[a], a)); return n }

                    function _(e, t) { for (var a in t) o(t, a) && (e[a] = t[a]); return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e }

                    function m(e, t, a, n) { return Dt(e, t, a, n, !0).utc() }

                    function f(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

                    function p(e) {
                        if (null == e._isValid) {
                            var t = f(e),
                                a = n.call(t.parsedDateParts, (function(e) { return null != e })),
                                r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                            if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                            e._isValid = r
                        }
                        return e._isValid
                    }

                    function g(e) { var t = m(NaN); return null != e ? _(f(t), e) : f(t).userInvalidated = !0, t }
                    n = Array.prototype.some ? Array.prototype.some : function(e) {
                        var t, a = Object(this),
                            n = a.length >>> 0;
                        for (t = 0; t < n; t++)
                            if (t in a && e.call(this, a[t], t, a)) return !0;
                        return !1
                    };
                    var y = r.momentProperties = [],
                        M = !1;

                    function v(e, t) {
                        var a, n, r;
                        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = f(t)), l(t._locale) || (e._locale = t._locale), y.length > 0)
                            for (a = 0; a < y.length; a++) l(r = t[n = y[a]]) || (e[n] = r);
                        return e
                    }

                    function b(e) { v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, r.updateOffset(this), M = !1) }

                    function L(e) { return e instanceof b || null != e && null != e._isAMomentObject }

                    function Y(e) {!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

                    function k(e, t) {
                        var a = !0;
                        return _((function() {
                            if (null != r.deprecationHandler && r.deprecationHandler(null, e), a) {
                                var n, i, s, d = [];
                                for (i = 0; i < arguments.length; i++) {
                                    if (n = "", "object" == typeof arguments[i]) {
                                        for (s in n += "\n[" + i + "] ", arguments[0]) o(arguments[0], s) && (n += s + ": " + arguments[0][s] + ", ");
                                        n = n.slice(0, -2)
                                    } else n = arguments[i];
                                    d.push(n)
                                }
                                Y(e + "\nArguments: " + Array.prototype.slice.call(d).join("") + "\n" + (new Error).stack), a = !1
                            }
                            return t.apply(this, arguments)
                        }), t)
                    }
                    var D, w = {};

                    function x(e, t) { null != r.deprecationHandler && r.deprecationHandler(e, t), w[e] || (Y(t), w[e] = !0) }

                    function T(e) { return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

                    function S(e, t) { var a, n = _({}, e); for (a in t) o(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {}, _(n[a], e[a]), _(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]); for (a in e) o(e, a) && !o(t, a) && s(e[a]) && (n[a] = _({}, n[a])); return n }

                    function j(e) { null != e && this.set(e) }

                    function H(e, t, a) {
                        var n = "" + Math.abs(e),
                            r = t - n.length;
                        return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                    }
                    r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, D = Object.keys ? Object.keys : function(e) { var t, a = []; for (t in e) o(e, t) && a.push(t); return a };
                    var P = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        A = {},
                        C = {};

                    function R(e, t, a, n) { var r = n; "string" == typeof n && (r = function() { return this[n]() }), e && (C[e] = r), t && (C[t[0]] = function() { return H(r.apply(this, arguments), t[1], t[2]) }), a && (C[a] = function() { return this.localeData().ordinal(r.apply(this, arguments), e) }) }

                    function F(e, t) { return e.isValid() ? (t = W(t, e.localeData()), A[t] = A[t] || function(e) { var t, a, n, r = e.match(P); for (t = 0, a = r.length; t < a; t++) C[r[t]] ? r[t] = C[r[t]] : r[t] = (n = r[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); return function(t) { var n, i = ""; for (n = 0; n < a; n++) i += T(r[n]) ? r[n].call(t, e) : r[n]; return i } }(t), A[t](e)) : e.localeData().invalidDate() }

                    function W(e, t) {
                        var a = 5;

                        function n(e) { return t.longDateFormat(e) || e }
                        for (O.lastIndex = 0; a >= 0 && O.test(e);) e = e.replace(O, n), O.lastIndex = 0, a -= 1;
                        return e
                    }
                    var E = {};

                    function I(e, t) {
                        var a = e.toLowerCase();
                        E[a] = E[a + "s"] = E[t] = e
                    }

                    function z(e) { return "string" == typeof e ? E[e] || E[e.toLowerCase()] : void 0 }

                    function N(e) { var t, a, n = {}; for (a in e) o(e, a) && (t = z(a)) && (n[t] = e[a]); return n }
                    var B = {};

                    function V(e, t) { B[e] = t }

                    function U(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }

                    function J(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

                    function G(e) {
                        var t = +e,
                            a = 0;
                        return 0 !== t && isFinite(t) && (a = J(t)), a
                    }

                    function q(e, t) { return function(a) { return null != a ? ($(this, e, a), r.updateOffset(this, t), this) : K(this, e) } }

                    function K(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

                    function $(e, t, a) { e.isValid() && !isNaN(a) && ("FullYear" === t && U(e.year()) && 1 === e.month() && 29 === e.date() ? (a = G(a), e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), Le(a, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a)) }
                    var Z, X = /\d/,
                        Q = /\d\d/,
                        ee = /\d{3}/,
                        te = /\d{4}/,
                        ae = /[+-]?\d{6}/,
                        ne = /\d\d?/,
                        re = /\d\d\d\d?/,
                        ie = /\d\d\d\d\d\d?/,
                        se = /\d{1,3}/,
                        oe = /\d{1,4}/,
                        de = /[+-]?\d{1,6}/,
                        le = /\d+/,
                        ue = /[+-]?\d+/,
                        ce = /Z|[+-]\d\d:?\d\d/gi,
                        he = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        _e = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

                    function me(e, t, a) { Z[e] = T(t) ? t : function(e, n) { return e && a ? a : t } }

                    function fe(e, t) { return o(Z, e) ? Z[e](t._strict, t._locale) : new RegExp(pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, a, n, r) { return t || a || n || r })))) }

                    function pe(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
                    Z = {};
                    var ge, ye = {};

                    function Me(e, t) { var a, n = t; for ("string" == typeof e && (e = [e]), u(t) && (n = function(e, a) { a[t] = G(e) }), a = 0; a < e.length; a++) ye[e[a]] = n }

                    function ve(e, t) { Me(e, (function(e, a, n, r) { n._w = n._w || {}, t(e, n._w, n, r) })) }

                    function be(e, t, a) { null != t && o(ye, e) && ye[e](t, a._a, a, e) }

                    function Le(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var a, n = (t % (a = 12) + a) % a; return e += (t - n) / 12, 1 === n ? U(e) ? 29 : 28 : 31 - n % 7 % 2 }
                    ge = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    }, R("M", ["MM", 2], "Mo", (function() { return this.month() + 1 })), R("MMM", 0, 0, (function(e) { return this.localeData().monthsShort(this, e) })), R("MMMM", 0, 0, (function(e) { return this.localeData().months(this, e) })), I("month", "M"), V("month", 8), me("M", ne), me("MM", ne, Q), me("MMM", (function(e, t) { return t.monthsShortRegex(e) })), me("MMMM", (function(e, t) { return t.monthsRegex(e) })), Me(["M", "MM"], (function(e, t) { t[1] = G(e) - 1 })), Me(["MMM", "MMMM"], (function(e, t, a, n) {
                        var r = a._locale.monthsParse(e, n, a._strict);
                        null != r ? t[1] = r : f(a).invalidMonth = e
                    }));
                    var Ye = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ke = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                        De = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        we = _e,
                        xe = _e;

                    function Te(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                        return a ? "MMM" === t ? -1 !== (r = ge.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = ge.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = ge.call(this._shortMonthsParse, s)) ? r : -1 !== (r = ge.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = ge.call(this._longMonthsParse, s)) ? r : -1 !== (r = ge.call(this._shortMonthsParse, s)) ? r : null
                    }

                    function Se(e, t) {
                        var a;
                        if (!e.isValid()) return e;
                        if ("string" == typeof t)
                            if (/^\d+$/.test(t)) t = G(t);
                            else if (!u(t = e.localeData().monthsParse(t))) return e;
                        return a = Math.min(e.date(), Le(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                    }

                    function je(e) { return null != e ? (Se(this, e), r.updateOffset(this, !0), this) : K(this, "Month") }

                    function He() {
                        function e(e, t) { return t.length - e.length }
                        var t, a, n = [],
                            r = [],
                            i = [];
                        for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                        for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = pe(n[t]), r[t] = pe(r[t]);
                        for (t = 0; t < 24; t++) i[t] = pe(i[t]);
                        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                    }

                    function Pe(e) { return U(e) ? 366 : 365 }
                    R("Y", 0, 0, (function() { var e = this.year(); return e <= 9999 ? H(e, 4) : "+" + e })), R(0, ["YY", 2], 0, (function() { return this.year() % 100 })), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), V("year", 1), me("Y", ue), me("YY", ne, Q), me("YYYY", oe, te), me("YYYYY", de, ae), me("YYYYYY", de, ae), Me(["YYYYY", "YYYYYY"], 0), Me("YYYY", (function(e, t) { t[0] = 2 === e.length ? r.parseTwoDigitYear(e) : G(e) })), Me("YY", (function(e, t) { t[0] = r.parseTwoDigitYear(e) })), Me("Y", (function(e, t) { t[0] = parseInt(e, 10) })), r.parseTwoDigitYear = function(e) { return G(e) + (G(e) > 68 ? 1900 : 2e3) };
                    var Oe = q("FullYear", !0);

                    function Ae(e, t, a, n, r, i, s) { var o; return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, r, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, r, i, s), o }

                    function Ce(e) { var t, a; return e < 100 && e >= 0 ? ((a = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t }

                    function Re(e, t, a) { var n = 7 + t - a; return -(7 + Ce(e, 0, n).getUTCDay() - t) % 7 + n - 1 }

                    function Fe(e, t, a, n, r) { var i, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Re(e, n, r); return o <= 0 ? s = Pe(i = e - 1) + o : o > Pe(e) ? (i = e + 1, s = o - Pe(e)) : (i = e, s = o), { year: i, dayOfYear: s } }

                    function We(e, t, a) {
                        var n, r, i = Re(e.year(), t, a),
                            s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                        return s < 1 ? n = s + Ee(r = e.year() - 1, t, a) : s > Ee(e.year(), t, a) ? (n = s - Ee(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), { week: n, year: r }
                    }

                    function Ee(e, t, a) {
                        var n = Re(e, t, a),
                            r = Re(e + 1, t, a);
                        return (Pe(e) - n + r) / 7
                    }

                    function Ie(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
                    R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), V("week", 5), V("isoWeek", 5), me("w", ne), me("ww", ne, Q), me("W", ne), me("WW", ne, Q), ve(["w", "ww", "W", "WW"], (function(e, t, a, n) { t[n.substr(0, 1)] = G(e) })), R("d", 0, "do", "day"), R("dd", 0, 0, (function(e) { return this.localeData().weekdaysMin(this, e) })), R("ddd", 0, 0, (function(e) { return this.localeData().weekdaysShort(this, e) })), R("dddd", 0, 0, (function(e) { return this.localeData().weekdays(this, e) })), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), V("day", 11), V("weekday", 11), V("isoWeekday", 11), me("d", ne), me("e", ne), me("E", ne), me("dd", (function(e, t) { return t.weekdaysMinRegex(e) })), me("ddd", (function(e, t) { return t.weekdaysShortRegex(e) })), me("dddd", (function(e, t) { return t.weekdaysRegex(e) })), ve(["dd", "ddd", "dddd"], (function(e, t, a, n) {
                        var r = a._locale.weekdaysParse(e, n, a._strict);
                        null != r ? t.d = r : f(a).invalidWeekday = e
                    })), ve(["d", "e", "E"], (function(e, t, a, n) { t[n] = G(e) }));
                    var ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        Ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        Be = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        Ve = _e,
                        Ue = _e,
                        Je = _e;

                    function Ge(e, t, a) {
                        var n, r, i, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                        return a ? "dddd" === t ? -1 !== (r = ge.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ge.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = ge.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = ge.call(this._weekdaysParse, s)) ? r : -1 !== (r = ge.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = ge.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ge.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = ge.call(this._weekdaysParse, s)) ? r : -1 !== (r = ge.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = ge.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = ge.call(this._weekdaysParse, s)) ? r : -1 !== (r = ge.call(this._shortWeekdaysParse, s)) ? r : null
                    }

                    function qe() {
                        function e(e, t) { return t.length - e.length }
                        var t, a, n, r, i, s = [],
                            o = [],
                            d = [],
                            l = [];
                        for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = pe(this.weekdaysMin(a, "")), r = pe(this.weekdaysShort(a, "")), i = pe(this.weekdays(a, "")), s.push(n), o.push(r), d.push(i), l.push(n), l.push(r), l.push(i);
                        s.sort(e), o.sort(e), d.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                    }

                    function Ke() { return this.hours() % 12 || 12 }

                    function $e(e, t) { R(e, 0, 0, (function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) })) }

                    function Ze(e, t) { return t._meridiemParse }
                    R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Ke), R("k", ["kk", 2], 0, (function() { return this.hours() || 24 })), R("hmm", 0, 0, (function() { return "" + Ke.apply(this) + H(this.minutes(), 2) })), R("hmmss", 0, 0, (function() { return "" + Ke.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2) })), R("Hmm", 0, 0, (function() { return "" + this.hours() + H(this.minutes(), 2) })), R("Hmmss", 0, 0, (function() { return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2) })), $e("a", !0), $e("A", !1), I("hour", "h"), V("hour", 13), me("a", Ze), me("A", Ze), me("H", ne), me("h", ne), me("k", ne), me("HH", ne, Q), me("hh", ne, Q), me("kk", ne, Q), me("hmm", re), me("hmmss", ie), me("Hmm", re), me("Hmmss", ie), Me(["H", "HH"], 3), Me(["k", "kk"], (function(e, t, a) {
                        var n = G(e);
                        t[3] = 24 === n ? 0 : n
                    })), Me(["a", "A"], (function(e, t, a) { a._isPm = a._locale.isPM(e), a._meridiem = e })), Me(["h", "hh"], (function(e, t, a) { t[3] = G(e), f(a).bigHour = !0 })), Me("hmm", (function(e, t, a) {
                        var n = e.length - 2;
                        t[3] = G(e.substr(0, n)), t[4] = G(e.substr(n)), f(a).bigHour = !0
                    })), Me("hmmss", (function(e, t, a) {
                        var n = e.length - 4,
                            r = e.length - 2;
                        t[3] = G(e.substr(0, n)), t[4] = G(e.substr(n, 2)), t[5] = G(e.substr(r)), f(a).bigHour = !0
                    })), Me("Hmm", (function(e, t, a) {
                        var n = e.length - 2;
                        t[3] = G(e.substr(0, n)), t[4] = G(e.substr(n))
                    })), Me("Hmmss", (function(e, t, a) {
                        var n = e.length - 4,
                            r = e.length - 2;
                        t[3] = G(e.substr(0, n)), t[4] = G(e.substr(n, 2)), t[5] = G(e.substr(r))
                    }));
                    var Xe, Qe = q("Hours", !0),
                        et = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ye, monthsShort: ke, week: { dow: 0, doy: 6 }, weekdays: ze, weekdaysMin: Be, weekdaysShort: Ne, meridiemParse: /[ap]\.?m?\.?/i },
                        tt = {},
                        at = {};

                    function nt(e, t) {
                        var a, n = Math.min(e.length, t.length);
                        for (a = 0; a < n; a += 1)
                            if (e[a] !== t[a]) return a;
                        return n
                    }

                    function rt(e) { return e ? e.toLowerCase().replace("_", "-") : e }

                    function it(t) {
                        var n = null;
                        if (void 0 === tt[t] && void 0 !== e && e && e.exports) try { n = Xe._abbr, a("RnhZ")("./" + t), st(n) } catch (r) { tt[t] = null }
                        return tt[t]
                    }

                    function st(e, t) { var a; return e && ((a = l(t) ? dt(e) : ot(e, t)) ? Xe = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Xe._abbr }

                    function ot(e, t) {
                        if (null !== t) {
                            var a, n = et;
                            if (t.abbr = e, null != tt[e]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = tt[e]._config;
                            else if (null != t.parentLocale)
                                if (null != tt[t.parentLocale]) n = tt[t.parentLocale]._config;
                                else {
                                    if (null == (a = it(t.parentLocale))) return at[t.parentLocale] || (at[t.parentLocale] = []), at[t.parentLocale].push({ name: e, config: t }), null;
                                    n = a._config
                                }
                            return tt[e] = new j(S(n, t)), at[e] && at[e].forEach((function(e) { ot(e.name, e.config) })), st(e), tt[e]
                        }
                        return delete tt[e], null
                    }

                    function dt(e) {
                        var t;
                        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Xe;
                        if (!i(e)) {
                            if (t = it(e)) return t;
                            e = [e]
                        }
                        return function(e) {
                            for (var t, a, n, r, i = 0; i < e.length;) {
                                for (t = (r = rt(e[i]).split("-")).length, a = (a = rt(e[i + 1])) ? a.split("-") : null; t > 0;) {
                                    if (n = it(r.slice(0, t).join("-"))) return n;
                                    if (a && a.length >= t && nt(r, a) >= t - 1) break;
                                    t--
                                }
                                i++
                            }
                            return Xe
                        }(e)
                    }

                    function lt(e) { var t, a = e._a; return a && -2 === f(e).overflow && (t = a[1] < 0 || a[1] > 11 ? 1 : a[2] < 1 || a[2] > Le(a[0], a[1]) ? 2 : a[3] < 0 || a[3] > 24 || 24 === a[3] && (0 !== a[4] || 0 !== a[5] || 0 !== a[6]) ? 3 : a[4] < 0 || a[4] > 59 ? 4 : a[5] < 0 || a[5] > 59 ? 5 : a[6] < 0 || a[6] > 999 ? 6 : -1, f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), f(e)._overflowWeeks && -1 === t && (t = 7), f(e)._overflowWeekday && -1 === t && (t = 8), f(e).overflow = t), e }
                    var ut = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        ct = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        ht = /Z|[+-]\d\d(?::?\d\d)?/,
                        _t = [
                            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                            ["YYYY-DDD", /\d{4}-\d{3}/],
                            ["YYYY-MM", /\d{4}-\d\d/, !1],
                            ["YYYYYYMMDD", /[+-]\d{10}/],
                            ["YYYYMMDD", /\d{8}/],
                            ["GGGG[W]WWE", /\d{4}W\d{3}/],
                            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                            ["YYYYDDD", /\d{7}/],
                            ["YYYYMM", /\d{6}/, !1],
                            ["YYYY", /\d{4}/, !1]
                        ],
                        mt = [
                            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                            ["HH:mm", /\d\d:\d\d/],
                            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                            ["HHmmss", /\d\d\d\d\d\d/],
                            ["HHmm", /\d\d\d\d/],
                            ["HH", /\d\d/]
                        ],
                        ft = /^\/?Date\((-?\d+)/i,
                        pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                        gt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                    function yt(e) {
                        var t, a, n, r, i, s, o = e._i,
                            d = ut.exec(o) || ct.exec(o);
                        if (d) {
                            for (f(e).iso = !0, t = 0, a = _t.length; t < a; t++)
                                if (_t[t][1].exec(d[1])) { r = _t[t][0], n = !1 !== _t[t][2]; break }
                            if (null == r) return void(e._isValid = !1);
                            if (d[3]) {
                                for (t = 0, a = mt.length; t < a; t++)
                                    if (mt[t][1].exec(d[3])) { i = (d[2] || " ") + mt[t][0]; break }
                                if (null == i) return void(e._isValid = !1)
                            }
                            if (!n && null != i) return void(e._isValid = !1);
                            if (d[4]) {
                                if (!ht.exec(d[4])) return void(e._isValid = !1);
                                s = "Z"
                            }
                            e._f = r + (i || "") + (s || ""), Yt(e)
                        } else e._isValid = !1
                    }

                    function Mt(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t }

                    function vt(e) {
                        var t, a, n, r, i, s, o, d, l = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                        if (l) {
                            if (a = l[4], n = l[3], r = l[2], i = l[5], s = l[6], o = l[7], d = [Mt(a), ke.indexOf(n), parseInt(r, 10), parseInt(i, 10), parseInt(s, 10)], o && d.push(parseInt(o, 10)), t = d, ! function(e, t, a) { return !e || Ne.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(a).weekdayMismatch = !0, a._isValid = !1, !1) }(l[1], t, e)) return;
                            e._a = t, e._tzm = function(e, t, a) {
                                if (e) return gt[e];
                                if (t) return 0;
                                var n = parseInt(a, 10),
                                    r = n % 100;
                                return (n - r) / 100 * 60 + r
                            }(l[8], l[9], l[10]), e._d = Ce.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
                        } else e._isValid = !1
                    }

                    function bt(e, t, a) { return null != e ? e : null != t ? t : a }

                    function Lt(e) {
                        var t, a, n, i, s, o = [];
                        if (!e._d) {
                            for (n = function(e) { var t = new Date(r.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                                    var t, a, n, r, i, s, o, d, l;
                                    null != (t = e._w).GG || null != t.W || null != t.E ? (i = 1, s = 4, a = bt(t.GG, e._a[0], We(wt(), 1, 4).year), n = bt(t.W, 1), ((r = bt(t.E, 1)) < 1 || r > 7) && (d = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, l = We(wt(), i, s), a = bt(t.gg, e._a[0], l.year), n = bt(t.w, l.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i), n < 1 || n > Ee(a, i, s) ? f(e)._overflowWeeks = !0 : null != d ? f(e)._overflowWeekday = !0 : (o = Fe(a, n, r, i, s), e._a[0] = o.year, e._dayOfYear = o.dayOfYear)
                                }(e), null != e._dayOfYear && (s = bt(e._a[0], n[0]), (e._dayOfYear > Pe(s) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), a = Ce(s, 0, e._dayOfYear), e._a[1] = a.getUTCMonth(), e._a[2] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = n[t];
                            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ce : Ae).apply(null, o), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (f(e).weekdayMismatch = !0)
                        }
                    }

                    function Yt(e) {
                        if (e._f !== r.ISO_8601)
                            if (e._f !== r.RFC_2822) {
                                e._a = [], f(e).empty = !0;
                                var t, a, n, i, s, o, d = "" + e._i,
                                    l = d.length,
                                    u = 0;
                                for (n = W(e._f, e._locale).match(P) || [], t = 0; t < n.length; t++) i = n[t], (a = (d.match(fe(i, e)) || [])[0]) && ((s = d.substr(0, d.indexOf(a))).length > 0 && f(e).unusedInput.push(s), d = d.slice(d.indexOf(a) + a.length), u += a.length), C[i] ? (a ? f(e).empty = !1 : f(e).unusedTokens.push(i), be(i, a, e)) : e._strict && !a && f(e).unusedTokens.push(i);
                                f(e).charsLeftOver = l - u, d.length > 0 && f(e).unusedInput.push(d), e._a[3] <= 12 && !0 === f(e).bigHour && e._a[3] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[3] = function(e, t, a) { var n; return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t }(e._locale, e._a[3], e._meridiem), null !== (o = f(e).era) && (e._a[0] = e._locale.erasConvertYear(o, e._a[0])), Lt(e), lt(e)
                            } else vt(e);
                        else yt(e)
                    }

                    function kt(e) {
                        var t = e._i,
                            a = e._f;
                        return e._locale = e._locale || dt(e._l), null === t || void 0 === a && "" === t ? g({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new b(lt(t)) : (c(t) ? e._d = t : i(a) ? function(e) {
                            var t, a, n, r, i, s, o = !1;
                            if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
                            for (r = 0; r < e._f.length; r++) i = 0, s = !1, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Yt(t), p(t) && (s = !0), i += f(t).charsLeftOver, i += 10 * f(t).unusedTokens.length, f(t).score = i, o ? i < n && (n = i, a = t) : (null == n || i < n || s) && (n = i, a = t, s && (o = !0));
                            _(e, a || t)
                        }(e) : a ? Yt(e) : function(e) {
                            var t = e._i;
                            l(t) ? e._d = new Date(r.now()) : c(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                                var t = ft.exec(e._i);
                                null === t ? (yt(e), !1 === e._isValid && (delete e._isValid, vt(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : r.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                            }(e) : i(t) ? (e._a = h(t.slice(0), (function(e) { return parseInt(e, 10) })), Lt(e)) : s(t) ? function(e) {
                                if (!e._d) {
                                    var t = N(e._i),
                                        a = void 0 === t.day ? t.date : t.day;
                                    e._a = h([t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond], (function(e) { return e && parseInt(e, 10) })), Lt(e)
                                }
                            }(e) : u(t) ? e._d = new Date(t) : r.createFromInputFallback(e)
                        }(e), p(e) || (e._d = null), e))
                    }

                    function Dt(e, t, a, n, r) { var o, l = {}; return !0 !== t && !1 !== t || (n = t, t = void 0), !0 !== a && !1 !== a || (n = a, a = void 0), (s(e) && d(e) || i(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = r, l._l = a, l._i = e, l._f = t, l._strict = n, (o = new b(lt(kt(l))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o }

                    function wt(e, t, a, n) { return Dt(e, t, a, n, !1) }
                    r.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) })), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
                    var xt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var e = wt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : g() })),
                        Tt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var e = wt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : g() }));

                    function St(e, t) { var a, n; if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return wt(); for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]); return a }
                    var jt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                    function Ht(e) {
                        var t = N(e),
                            a = t.year || 0,
                            n = t.quarter || 0,
                            r = t.month || 0,
                            i = t.week || t.isoWeek || 0,
                            s = t.day || 0,
                            d = t.hour || 0,
                            l = t.minute || 0,
                            u = t.second || 0,
                            c = t.millisecond || 0;
                        this._isValid = function(e) {
                            var t, a, n = !1;
                            for (t in e)
                                if (o(e, t) && (-1 === ge.call(jt, t) || null != e[t] && isNaN(e[t]))) return !1;
                            for (a = 0; a < jt.length; ++a)
                                if (e[jt[a]]) {
                                    if (n) return !1;
                                    parseFloat(e[jt[a]]) !== G(e[jt[a]]) && (n = !0)
                                }
                            return !0
                        }(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * d * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = dt(), this._bubble()
                    }

                    function Pt(e) { return e instanceof Ht }

                    function Ot(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

                    function At(e, t) {
                        R(e, 0, 0, (function() {
                            var e = this.utcOffset(),
                                a = "+";
                            return e < 0 && (e = -e, a = "-"), a + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
                        }))
                    }
                    At("Z", ":"), At("ZZ", ""), me("Z", he), me("ZZ", he), Me(["Z", "ZZ"], (function(e, t, a) { a._useUTC = !0, a._tzm = Rt(he, e) }));
                    var Ct = /([\+\-]|\d\d)/gi;

                    function Rt(e, t) { var a, n, r = (t || "").match(e); return null === r ? null : 0 === (n = 60 * (a = ((r[r.length - 1] || []) + "").match(Ct) || ["-", 0, 0])[1] + G(a[2])) ? 0 : "+" === a[0] ? n : -n }

                    function Ft(e, t) { var a, n; return t._isUTC ? (a = t.clone(), n = (L(e) || c(e) ? e.valueOf() : wt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), r.updateOffset(a, !1), a) : wt(e).local() }

                    function Wt(e) { return -Math.round(e._d.getTimezoneOffset()) }

                    function Et() { return !!this.isValid() && this._isUTC && 0 === this._offset }
                    r.updateOffset = function() {};
                    var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                        zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                    function Nt(e, t) {
                        var a, n, r, i, s, d, l = e,
                            c = null;
                        return Pt(e) ? l = { ms: e._milliseconds, d: e._days, M: e._months } : u(e) || !isNaN(+e) ? (l = {}, t ? l[t] = +e : l.milliseconds = +e) : (c = It.exec(e)) ? (a = "-" === c[1] ? -1 : 1, l = { y: 0, d: G(c[2]) * a, h: G(c[3]) * a, m: G(c[4]) * a, s: G(c[5]) * a, ms: G(Ot(1e3 * c[6])) * a }) : (c = zt.exec(e)) ? (a = "-" === c[1] ? -1 : 1, l = { y: Bt(c[2], a), M: Bt(c[3], a), w: Bt(c[4], a), d: Bt(c[5], a), h: Bt(c[6], a), m: Bt(c[7], a), s: Bt(c[8], a) }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (i = wt(l.from), s = wt(l.to), r = i.isValid() && s.isValid() ? (s = Ft(s, i), i.isBefore(s) ? d = Vt(i, s) : ((d = Vt(s, i)).milliseconds = -d.milliseconds, d.months = -d.months), d) : { milliseconds: 0, months: 0 }, (l = {}).ms = r.milliseconds, l.M = r.months), n = new Ht(l), Pt(e) && o(e, "_locale") && (n._locale = e._locale), Pt(e) && o(e, "_isValid") && (n._isValid = e._isValid), n
                    }

                    function Bt(e, t) { var a = e && parseFloat(e.replace(",", ".")); return (isNaN(a) ? 0 : a) * t }

                    function Vt(e, t) { var a = {}; return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a }

                    function Ut(e, t) { return function(a, n) { var r; return null === n || isNaN(+n) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), Jt(this, Nt(a, n), e), this } }

                    function Jt(e, t, a, n) {
                        var i = t._milliseconds,
                            s = Ot(t._days),
                            o = Ot(t._months);
                        e.isValid() && (n = null == n || n, o && Se(e, K(e, "Month") + o * a), s && $(e, "Date", K(e, "Date") + s * a), i && e._d.setTime(e._d.valueOf() + i * a), n && r.updateOffset(e, s || o))
                    }
                    Nt.fn = Ht.prototype, Nt.invalid = function() { return Nt(NaN) };
                    var Gt = Ut(1, "add"),
                        qt = Ut(-1, "subtract");

                    function Kt(e) { return "string" == typeof e || e instanceof String }

                    function $t(e) {
                        return L(e) || c(e) || Kt(e) || u(e) || function(e) {
                            var t = i(e),
                                a = !1;
                            return t && (a = 0 === e.filter((function(t) { return !u(t) && Kt(e) })).length), t && a
                        }(e) || function(e) {
                            var t, a, n = s(e) && !d(e),
                                r = !1,
                                i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                            for (t = 0; t < i.length; t += 1) a = i[t], r = r || o(e, a);
                            return n && r
                        }(e) || null == e
                    }

                    function Zt(e) {
                        var t, a, n = s(e) && !d(e),
                            r = !1,
                            i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                        for (t = 0; t < i.length; t += 1) a = i[t], r = r || o(e, a);
                        return n && r
                    }

                    function Xt(e, t) {
                        if (e.date() < t.date()) return -Xt(t, e);
                        var a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            n = e.clone().add(a, "months");
                        return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0
                    }

                    function Qt(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this) }
                    r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                    var ea = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) { return void 0 === e ? this.localeData() : this.locale(e) }));

                    function ta() { return this._locale }

                    function aa(e, t) { return (e % t + t) % t }

                    function na(e, t, a) { return e < 100 && e >= 0 ? new Date(e + 400, t, a) - 126227808e5 : new Date(e, t, a).valueOf() }

                    function ra(e, t, a) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - 126227808e5 : Date.UTC(e, t, a) }

                    function ia(e, t) { return t.erasAbbrRegex(e) }

                    function sa() {
                        var e, t, a = [],
                            n = [],
                            r = [],
                            i = [],
                            s = this.eras();
                        for (e = 0, t = s.length; e < t; ++e) n.push(pe(s[e].name)), a.push(pe(s[e].abbr)), r.push(pe(s[e].narrow)), i.push(pe(s[e].name)), i.push(pe(s[e].abbr)), i.push(pe(s[e].narrow));
                        this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
                    }

                    function oa(e, t) { R(0, [e, e.length], 0, t) }

                    function da(e, t, a, n, r) { var i; return null == e ? We(this, n, r).year : (t > (i = Ee(e, n, r)) && (t = i), la.call(this, e, t, a, n, r)) }

                    function la(e, t, a, n, r) {
                        var i = Fe(e, t, a, n, r),
                            s = Ce(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }
                    R("N", 0, 0, "eraAbbr"), R("NN", 0, 0, "eraAbbr"), R("NNN", 0, 0, "eraAbbr"), R("NNNN", 0, 0, "eraName"), R("NNNNN", 0, 0, "eraNarrow"), R("y", ["y", 1], "yo", "eraYear"), R("y", ["yy", 2], 0, "eraYear"), R("y", ["yyy", 3], 0, "eraYear"), R("y", ["yyyy", 4], 0, "eraYear"), me("N", ia), me("NN", ia), me("NNN", ia), me("NNNN", (function(e, t) { return t.erasNameRegex(e) })), me("NNNNN", (function(e, t) { return t.erasNarrowRegex(e) })), Me(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, a, n) {
                        var r = a._locale.erasParse(e, n, a._strict);
                        r ? f(a).era = r : f(a).invalidEra = e
                    })), me("y", le), me("yy", le), me("yyy", le), me("yyyy", le), me("yo", (function(e, t) { return t._eraYearOrdinalRegex || le })), Me(["y", "yy", "yyy", "yyyy"], 0), Me(["yo"], (function(e, t, a, n) {
                        var r;
                        a._locale._eraYearOrdinalRegex && (r = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[0] = a._locale.eraYearOrdinalParse(e, r) : t[0] = parseInt(e, 10)
                    })), R(0, ["gg", 2], 0, (function() { return this.weekYear() % 100 })), R(0, ["GG", 2], 0, (function() { return this.isoWeekYear() % 100 })), oa("gggg", "weekYear"), oa("ggggg", "weekYear"), oa("GGGG", "isoWeekYear"), oa("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), V("weekYear", 1), V("isoWeekYear", 1), me("G", ue), me("g", ue), me("GG", ne, Q), me("gg", ne, Q), me("GGGG", oe, te), me("gggg", oe, te), me("GGGGG", de, ae), me("ggggg", de, ae), ve(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, a, n) { t[n.substr(0, 2)] = G(e) })), ve(["gg", "GG"], (function(e, t, a, n) { t[n] = r.parseTwoDigitYear(e) })), R("Q", 0, "Qo", "quarter"), I("quarter", "Q"), V("quarter", 7), me("Q", X), Me("Q", (function(e, t) { t[1] = 3 * (G(e) - 1) })), R("D", ["DD", 2], "Do", "date"), I("date", "D"), V("date", 9), me("D", ne), me("DD", ne, Q), me("Do", (function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient })), Me(["D", "DD"], 2), Me("Do", (function(e, t) { t[2] = G(e.match(ne)[0]) }));
                    var ua = q("Date", !0);
                    R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), V("dayOfYear", 4), me("DDD", se), me("DDDD", ee), Me(["DDD", "DDDD"], (function(e, t, a) { a._dayOfYear = G(e) })), R("m", ["mm", 2], 0, "minute"), I("minute", "m"), V("minute", 14), me("m", ne), me("mm", ne, Q), Me(["m", "mm"], 4);
                    var ca = q("Minutes", !1);
                    R("s", ["ss", 2], 0, "second"), I("second", "s"), V("second", 15), me("s", ne), me("ss", ne, Q), Me(["s", "ss"], 5);
                    var ha, _a, ma = q("Seconds", !1);
                    for (R("S", 0, 0, (function() { return ~~(this.millisecond() / 100) })), R(0, ["SS", 2], 0, (function() { return ~~(this.millisecond() / 10) })), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, (function() { return 10 * this.millisecond() })), R(0, ["SSSSS", 5], 0, (function() { return 100 * this.millisecond() })), R(0, ["SSSSSS", 6], 0, (function() { return 1e3 * this.millisecond() })), R(0, ["SSSSSSS", 7], 0, (function() { return 1e4 * this.millisecond() })), R(0, ["SSSSSSSS", 8], 0, (function() { return 1e5 * this.millisecond() })), R(0, ["SSSSSSSSS", 9], 0, (function() { return 1e6 * this.millisecond() })), I("millisecond", "ms"), V("millisecond", 16), me("S", se, X), me("SS", se, Q), me("SSS", se, ee), ha = "SSSS"; ha.length <= 9; ha += "S") me(ha, le);

                    function fa(e, t) { t[6] = G(1e3 * ("0." + e)) }
                    for (ha = "S"; ha.length <= 9; ha += "S") Me(ha, fa);
                    _a = q("Milliseconds", !1), R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
                    var pa = b.prototype;

                    function ga(e) { return e }
                    pa.add = Gt, pa.calendar = function(e, t) {
                        1 === arguments.length && ($t(arguments[0]) ? (e = arguments[0], t = void 0) : Zt(arguments[0]) && (t = arguments[0], e = void 0));
                        var a = e || wt(),
                            n = Ft(a, this).startOf("day"),
                            i = r.calendarFormat(this, n) || "sameElse",
                            s = t && (T(t[i]) ? t[i].call(this, a) : t[i]);
                        return this.format(s || this.localeData().calendar(i, this, wt(a)))
                    }, pa.clone = function() { return new b(this) }, pa.diff = function(e, t, a) {
                        var n, r, i;
                        if (!this.isValid()) return NaN;
                        if (!(n = Ft(e, this)).isValid()) return NaN;
                        switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = z(t)) {
                            case "year":
                                i = Xt(this, n) / 12;
                                break;
                            case "month":
                                i = Xt(this, n);
                                break;
                            case "quarter":
                                i = Xt(this, n) / 3;
                                break;
                            case "second":
                                i = (this - n) / 1e3;
                                break;
                            case "minute":
                                i = (this - n) / 6e4;
                                break;
                            case "hour":
                                i = (this - n) / 36e5;
                                break;
                            case "day":
                                i = (this - n - r) / 864e5;
                                break;
                            case "week":
                                i = (this - n - r) / 6048e5;
                                break;
                            default:
                                i = this - n
                        }
                        return a ? i : J(i)
                    }, pa.endOf = function(e) {
                        var t, a;
                        if (void 0 === (e = z(e)) || "millisecond" === e || !this.isValid()) return this;
                        switch (a = this._isUTC ? ra : na, e) {
                            case "year":
                                t = a(this.year() + 1, 0, 1) - 1;
                                break;
                            case "quarter":
                                t = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                                break;
                            case "month":
                                t = a(this.year(), this.month() + 1, 1) - 1;
                                break;
                            case "week":
                                t = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                                break;
                            case "isoWeek":
                                t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                                break;
                            case "day":
                            case "date":
                                t = a(this.year(), this.month(), this.date() + 1) - 1;
                                break;
                            case "hour":
                                t = this._d.valueOf(), t += 36e5 - aa(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                                break;
                            case "minute":
                                t = this._d.valueOf(), t += 6e4 - aa(t, 6e4) - 1;
                                break;
                            case "second":
                                t = this._d.valueOf(), t += 1e3 - aa(t, 1e3) - 1
                        }
                        return this._d.setTime(t), r.updateOffset(this, !0), this
                    }, pa.format = function(e) { e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat); var t = F(this, e); return this.localeData().postformat(t) }, pa.from = function(e, t) { return this.isValid() && (L(e) && e.isValid() || wt(e).isValid()) ? Nt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, pa.fromNow = function(e) { return this.from(wt(), e) }, pa.to = function(e, t) { return this.isValid() && (L(e) && e.isValid() || wt(e).isValid()) ? Nt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, pa.toNow = function(e) { return this.to(wt(), e) }, pa.get = function(e) { return T(this[e = z(e)]) ? this[e]() : this }, pa.invalidAt = function() { return f(this).overflow }, pa.isAfter = function(e, t) { var a = L(e) ? e : wt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = z(t) || "millisecond") ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()) }, pa.isBefore = function(e, t) { var a = L(e) ? e : wt(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = z(t) || "millisecond") ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()) }, pa.isBetween = function(e, t, a, n) {
                        var r = L(e) ? e : wt(e),
                            i = L(t) ? t : wt(t);
                        return !!(this.isValid() && r.isValid() && i.isValid()) && (("(" === (n = n || "()")[0] ? this.isAfter(r, a) : !this.isBefore(r, a)) && (")" === n[1] ? this.isBefore(i, a) : !this.isAfter(i, a)))
                    }, pa.isSame = function(e, t) { var a, n = L(e) ? e : wt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = z(t) || "millisecond") ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) }, pa.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, pa.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, pa.isValid = function() { return p(this) }, pa.lang = ea, pa.locale = Qt, pa.localeData = ta, pa.max = Tt, pa.min = xt, pa.parsingFlags = function() { return _({}, f(this)) }, pa.set = function(e, t) { if ("object" == typeof e) { var a, n = function(e) { var t, a = []; for (t in e) o(e, t) && a.push({ unit: t, priority: B[t] }); return a.sort((function(e, t) { return e.priority - t.priority })), a }(e = N(e)); for (a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]) } else if (T(this[e = z(e)])) return this[e](t); return this }, pa.startOf = function(e) {
                        var t, a;
                        if (void 0 === (e = z(e)) || "millisecond" === e || !this.isValid()) return this;
                        switch (a = this._isUTC ? ra : na, e) {
                            case "year":
                                t = a(this.year(), 0, 1);
                                break;
                            case "quarter":
                                t = a(this.year(), this.month() - this.month() % 3, 1);
                                break;
                            case "month":
                                t = a(this.year(), this.month(), 1);
                                break;
                            case "week":
                                t = a(this.year(), this.month(), this.date() - this.weekday());
                                break;
                            case "isoWeek":
                                t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                                break;
                            case "day":
                            case "date":
                                t = a(this.year(), this.month(), this.date());
                                break;
                            case "hour":
                                t = this._d.valueOf(), t -= aa(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                                break;
                            case "minute":
                                t = this._d.valueOf(), t -= aa(t, 6e4);
                                break;
                            case "second":
                                t = this._d.valueOf(), t -= aa(t, 1e3)
                        }
                        return this._d.setTime(t), r.updateOffset(this, !0), this
                    }, pa.subtract = qt, pa.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, pa.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, pa.toDate = function() { return new Date(this.valueOf()) }, pa.toISOString = function(e) {
                        if (!this.isValid()) return null;
                        var t = !0 !== e,
                            a = t ? this.clone().utc() : this;
                        return a.year() < 0 || a.year() > 9999 ? F(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(a, "Z")) : F(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                    }, pa.inspect = function() {
                        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                        var e, t, a, n = "moment",
                            r = "";
                        return this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), e = "[" + n + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = r + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + a)
                    }, "undefined" != typeof Symbol && null != Symbol.for && (pa[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" }), pa.toJSON = function() { return this.isValid() ? this.toISOString() : null }, pa.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, pa.unix = function() { return Math.floor(this.valueOf() / 1e3) }, pa.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, pa.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, pa.eraName = function() { var e, t, a, n = this.localeData().eras(); for (e = 0, t = n.length; e < t; ++e) { if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].name; if (n[e].until <= a && a <= n[e].since) return n[e].name } return "" }, pa.eraNarrow = function() { var e, t, a, n = this.localeData().eras(); for (e = 0, t = n.length; e < t; ++e) { if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].narrow; if (n[e].until <= a && a <= n[e].since) return n[e].narrow } return "" }, pa.eraAbbr = function() { var e, t, a, n = this.localeData().eras(); for (e = 0, t = n.length; e < t; ++e) { if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].abbr; if (n[e].until <= a && a <= n[e].since) return n[e].abbr } return "" }, pa.eraYear = function() {
                        var e, t, a, n, i = this.localeData().eras();
                        for (e = 0, t = i.length; e < t; ++e)
                            if (a = i[e].since <= i[e].until ? 1 : -1, n = this.startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since) return (this.year() - r(i[e].since).year()) * a + i[e].offset;
                        return this.year()
                    }, pa.year = Oe, pa.isLeapYear = function() { return U(this.year()) }, pa.weekYear = function(e) { return da.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, pa.isoWeekYear = function(e) { return da.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, pa.quarter = pa.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, pa.month = je, pa.daysInMonth = function() { return Le(this.year(), this.month()) }, pa.week = pa.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, pa.isoWeek = pa.isoWeeks = function(e) { var t = We(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, pa.weeksInYear = function() { var e = this.localeData()._week; return Ee(this.year(), e.dow, e.doy) }, pa.weeksInWeekYear = function() { var e = this.localeData()._week; return Ee(this.weekYear(), e.dow, e.doy) }, pa.isoWeeksInYear = function() { return Ee(this.year(), 1, 4) }, pa.isoWeeksInISOWeekYear = function() { return Ee(this.isoWeekYear(), 1, 4) }, pa.date = ua, pa.day = pa.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, pa.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, pa.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, pa.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, pa.hour = pa.hours = Qe, pa.minute = pa.minutes = ca, pa.second = pa.seconds = ma, pa.millisecond = pa.milliseconds = _a, pa.utcOffset = function(e, t, a) { var n, i = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = Rt(he, e))) return this } else Math.abs(e) < 16 && !a && (e *= 60); return !this._isUTC && t && (n = Wt(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!t || this._changeInProgress ? Jt(this, Nt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? i : Wt(this) }, pa.utc = function(e) { return this.utcOffset(0, e) }, pa.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this }, pa.parseZone = function() {
                        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                        else if ("string" == typeof this._i) {
                            var e = Rt(ce, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                        }
                        return this
                    }, pa.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, pa.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, pa.isLocal = function() { return !!this.isValid() && !this._isUTC }, pa.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, pa.isUtc = Et, pa.isUTC = Et, pa.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, pa.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, pa.dates = k("dates accessor is deprecated. Use date instead.", ua), pa.months = k("months accessor is deprecated. Use month instead", je), pa.years = k("years accessor is deprecated. Use year instead", Oe), pa.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() })), pa.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                        if (!l(this._isDSTShifted)) return this._isDSTShifted;
                        var e, t = {};
                        return v(t, this), (t = kt(t))._a ? (e = t._isUTC ? m(t._a) : wt(t._a), this._isDSTShifted = this.isValid() && function(e, t, a) {
                            var n, r = Math.min(e.length, t.length),
                                i = Math.abs(e.length - t.length),
                                s = 0;
                            for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && G(e[n]) !== G(t[n])) && s++;
                            return s + i
                        }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
                    }));
                    var ya = j.prototype;

                    function Ma(e, t, a, n) {
                        var r = dt(),
                            i = m().set(n, t);
                        return r[a](i, e)
                    }

                    function va(e, t, a) { if (u(e) && (t = e, e = void 0), e = e || "", null != t) return Ma(e, t, a, "month"); var n, r = []; for (n = 0; n < 12; n++) r[n] = Ma(e, n, a, "month"); return r }

                    function ba(e, t, a, n) {
                        "boolean" == typeof e ? (u(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, u(t) && (a = t, t = void 0), t = t || "");
                        var r, i = dt(),
                            s = e ? i._week.dow : 0,
                            o = [];
                        if (null != a) return Ma(t, (a + s) % 7, n, "day");
                        for (r = 0; r < 7; r++) o[r] = Ma(t, (r + s) % 7, n, "day");
                        return o
                    }
                    ya.calendar = function(e, t, a) { var n = this._calendar[e] || this._calendar.sameElse; return T(n) ? n.call(t, a) : n }, ya.longDateFormat = function(e) {
                        var t = this._longDateFormat[e],
                            a = this._longDateFormat[e.toUpperCase()];
                        return t || !a ? t : (this._longDateFormat[e] = a.match(P).map((function(e) { return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e })).join(""), this._longDateFormat[e])
                    }, ya.invalidDate = function() { return this._invalidDate }, ya.ordinal = function(e) { return this._ordinal.replace("%d", e) }, ya.preparse = ga, ya.postformat = ga, ya.relativeTime = function(e, t, a, n) { var r = this._relativeTime[a]; return T(r) ? r(e, t, a, n) : r.replace(/%d/i, e) }, ya.pastFuture = function(e, t) { var a = this._relativeTime[e > 0 ? "future" : "past"]; return T(a) ? a(t) : a.replace(/%s/i, t) }, ya.set = function(e) {
                        var t, a;
                        for (a in e) o(e, a) && (T(t = e[a]) ? this[a] = t : this["_" + a] = t);
                        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                    }, ya.eras = function(e, t) {
                        var a, n, i, s = this._eras || dt("en")._eras;
                        for (a = 0, n = s.length; a < n; ++a) {
                            switch (typeof s[a].since) {
                                case "string":
                                    i = r(s[a].since).startOf("day"), s[a].since = i.valueOf()
                            }
                            switch (typeof s[a].until) {
                                case "undefined":
                                    s[a].until = 1 / 0;
                                    break;
                                case "string":
                                    i = r(s[a].until).startOf("day").valueOf(), s[a].until = i.valueOf()
                            }
                        }
                        return s
                    }, ya.erasParse = function(e, t, a) {
                        var n, r, i, s, o, d = this.eras();
                        for (e = e.toUpperCase(), n = 0, r = d.length; n < r; ++n)
                            if (i = d[n].name.toUpperCase(), s = d[n].abbr.toUpperCase(), o = d[n].narrow.toUpperCase(), a) switch (t) {
                                case "N":
                                case "NN":
                                case "NNN":
                                    if (s === e) return d[n];
                                    break;
                                case "NNNN":
                                    if (i === e) return d[n];
                                    break;
                                case "NNNNN":
                                    if (o === e) return d[n]
                            } else if ([i, s, o].indexOf(e) >= 0) return d[n]
                    }, ya.erasConvertYear = function(e, t) { var a = e.since <= e.until ? 1 : -1; return void 0 === t ? r(e.since).year() : r(e.since).year() + (t - e.offset) * a }, ya.erasAbbrRegex = function(e) { return o(this, "_erasAbbrRegex") || sa.call(this), e ? this._erasAbbrRegex : this._erasRegex }, ya.erasNameRegex = function(e) { return o(this, "_erasNameRegex") || sa.call(this), e ? this._erasNameRegex : this._erasRegex }, ya.erasNarrowRegex = function(e) { return o(this, "_erasNarrowRegex") || sa.call(this), e ? this._erasNarrowRegex : this._erasRegex }, ya.months = function(e, t) { return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || De).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone }, ya.monthsShort = function(e, t) { return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[De.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, ya.monthsParse = function(e, t, a) { var n, r, i; if (this._monthsParseExact) return Te.call(this, e, t, a); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (r = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n; if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n; if (!a && this._monthsParse[n].test(e)) return n } }, ya.monthsRegex = function(e) { return this._monthsParseExact ? (o(this, "_monthsRegex") || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = xe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, ya.monthsShortRegex = function(e) { return this._monthsParseExact ? (o(this, "_monthsRegex") || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = we), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, ya.week = function(e) { return We(e, this._week.dow, this._week.doy).week }, ya.firstDayOfYear = function() { return this._week.doy }, ya.firstDayOfWeek = function() { return this._week.dow }, ya.weekdays = function(e, t) { var a = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Ie(a, this._week.dow) : e ? a[e.day()] : a }, ya.weekdaysMin = function(e) { return !0 === e ? Ie(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, ya.weekdaysShort = function(e) { return !0 === e ? Ie(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, ya.weekdaysParse = function(e, t, a) { var n, r, i; if (this._weekdaysParseExact) return Ge.call(this, e, t, a); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (r = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n; if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n; if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n; if (!a && this._weekdaysParse[n].test(e)) return n } }, ya.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Ve), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, ya.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ue), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, ya.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, ya.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, ya.meridiem = function(e, t, a) { return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM" }, st("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === G(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), r.lang = k("moment.lang is deprecated. Use moment.locale instead.", st), r.langData = k("moment.langData is deprecated. Use moment.localeData instead.", dt);
                    var La = Math.abs;

                    function Ya(e, t, a, n) { var r = Nt(t, a); return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble() }

                    function ka(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

                    function Da(e) { return 4800 * e / 146097 }

                    function wa(e) { return 146097 * e / 4800 }

                    function xa(e) { return function() { return this.as(e) } }
                    var Ta = xa("ms"),
                        Sa = xa("s"),
                        ja = xa("m"),
                        Ha = xa("h"),
                        Pa = xa("d"),
                        Oa = xa("w"),
                        Aa = xa("M"),
                        Ca = xa("Q"),
                        Ra = xa("y");

                    function Fa(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
                    var Wa = Fa("milliseconds"),
                        Ea = Fa("seconds"),
                        Ia = Fa("minutes"),
                        za = Fa("hours"),
                        Na = Fa("days"),
                        Ba = Fa("months"),
                        Va = Fa("years"),
                        Ua = Math.round,
                        Ja = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

                    function Ga(e, t, a, n, r) { return r.relativeTime(t || 1, !!a, e, n) }
                    var qa = Math.abs;

                    function Ka(e) { return (e > 0) - (e < 0) || +e }

                    function $a() {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var e, t, a, n, r, i, s, o, d = qa(this._milliseconds) / 1e3,
                            l = qa(this._days),
                            u = qa(this._months),
                            c = this.asSeconds();
                        return c ? (e = J(d / 60), t = J(e / 60), d %= 60, e %= 60, a = J(u / 12), u %= 12, n = d ? d.toFixed(3).replace(/\.?0+$/, "") : "", r = c < 0 ? "-" : "", i = Ka(this._months) !== Ka(c) ? "-" : "", s = Ka(this._days) !== Ka(c) ? "-" : "", o = Ka(this._milliseconds) !== Ka(c) ? "-" : "", r + "P" + (a ? i + a + "Y" : "") + (u ? i + u + "M" : "") + (l ? s + l + "D" : "") + (t || e || d ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (d ? o + n + "S" : "")) : "P0D"
                    }
                    var Za = Ht.prototype;
                    return Za.isValid = function() { return this._isValid }, Za.abs = function() { var e = this._data; return this._milliseconds = La(this._milliseconds), this._days = La(this._days), this._months = La(this._months), e.milliseconds = La(e.milliseconds), e.seconds = La(e.seconds), e.minutes = La(e.minutes), e.hours = La(e.hours), e.months = La(e.months), e.years = La(e.years), this }, Za.add = function(e, t) { return Ya(this, e, t, 1) }, Za.subtract = function(e, t) { return Ya(this, e, t, -1) }, Za.as = function(e) {
                        if (!this.isValid()) return NaN;
                        var t, a, n = this._milliseconds;
                        if ("month" === (e = z(e)) || "quarter" === e || "year" === e) switch (t = this._days + n / 864e5, a = this._months + Da(t), e) {
                            case "month":
                                return a;
                            case "quarter":
                                return a / 3;
                            case "year":
                                return a / 12
                        } else switch (t = this._days + Math.round(wa(this._months)), e) {
                            case "week":
                                return t / 7 + n / 6048e5;
                            case "day":
                                return t + n / 864e5;
                            case "hour":
                                return 24 * t + n / 36e5;
                            case "minute":
                                return 1440 * t + n / 6e4;
                            case "second":
                                return 86400 * t + n / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + n;
                            default:
                                throw new Error("Unknown unit " + e)
                        }
                    }, Za.asMilliseconds = Ta, Za.asSeconds = Sa, Za.asMinutes = ja, Za.asHours = Ha, Za.asDays = Pa, Za.asWeeks = Oa, Za.asMonths = Aa, Za.asQuarters = Ca, Za.asYears = Ra, Za.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * G(this._months / 12) : NaN }, Za._bubble = function() {
                        var e, t, a, n, r, i = this._milliseconds,
                            s = this._days,
                            o = this._months,
                            d = this._data;
                        return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * ka(wa(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = J(i / 1e3), d.seconds = e % 60, t = J(e / 60), d.minutes = t % 60, a = J(t / 60), d.hours = a % 24, s += J(a / 24), r = J(Da(s)), o += r, s -= ka(wa(r)), n = J(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
                    }, Za.clone = function() { return Nt(this) }, Za.get = function(e) { return e = z(e), this.isValid() ? this[e + "s"]() : NaN }, Za.milliseconds = Wa, Za.seconds = Ea, Za.minutes = Ia, Za.hours = za, Za.days = Na, Za.weeks = function() { return J(this.days() / 7) }, Za.months = Ba, Za.years = Va, Za.humanize = function(e, t) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var a, n, r = !1,
                            i = Ja;
                        return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (r = e), "object" == typeof t && (i = Object.assign({}, Ja, t), null != t.s && null == t.ss && (i.ss = t.s - 1)), a = this.localeData(), n = function(e, t, a, n) {
                            var r = Nt(e).abs(),
                                i = Ua(r.as("s")),
                                s = Ua(r.as("m")),
                                o = Ua(r.as("h")),
                                d = Ua(r.as("d")),
                                l = Ua(r.as("M")),
                                u = Ua(r.as("w")),
                                c = Ua(r.as("y")),
                                h = i <= a.ss && ["s", i] || i < a.s && ["ss", i] || s <= 1 && ["m"] || s < a.m && ["mm", s] || o <= 1 && ["h"] || o < a.h && ["hh", o] || d <= 1 && ["d"] || d < a.d && ["dd", d];
                            return null != a.w && (h = h || u <= 1 && ["w"] || u < a.w && ["ww", u]), (h = h || l <= 1 && ["M"] || l < a.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c])[2] = t, h[3] = +e > 0, h[4] = n, Ga.apply(null, h)
                        }(this, !r, i, a), r && (n = a.pastFuture(+this, n)), a.postformat(n)
                    }, Za.toISOString = $a, Za.toString = $a, Za.toJSON = $a, Za.locale = Qt, Za.localeData = ta, Za.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $a), Za.lang = ea, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), me("x", ue), me("X", /[+-]?\d+(\.\d{1,3})?/), Me("X", (function(e, t, a) { a._d = new Date(1e3 * parseFloat(e)) })), Me("x", (function(e, t, a) { a._d = new Date(G(e)) })), r.version = "2.26.0", t = wt, r.fn = pa, r.min = function() { var e = [].slice.call(arguments, 0); return St("isBefore", e) }, r.max = function() { var e = [].slice.call(arguments, 0); return St("isAfter", e) }, r.now = function() { return Date.now ? Date.now() : +new Date }, r.utc = m, r.unix = function(e) { return wt(1e3 * e) }, r.months = function(e, t) { return va(e, t, "months") }, r.isDate = c, r.locale = st, r.invalid = g, r.duration = Nt, r.isMoment = L, r.weekdays = function(e, t, a) { return ba(e, t, a, "weekdays") }, r.parseZone = function() { return wt.apply(null, arguments).parseZone() }, r.localeData = dt, r.isDuration = Pt, r.monthsShort = function(e, t) { return va(e, t, "monthsShort") }, r.weekdaysMin = function(e, t, a) { return ba(e, t, a, "weekdaysMin") }, r.defineLocale = ot, r.updateLocale = function(e, t) {
                        if (null != t) {
                            var a, n, r = et;
                            null != tt[e] && null != tt[e].parentLocale ? tt[e].set(S(tt[e]._config, t)) : (null != (n = it(e)) && (r = n._config), t = S(r, t), null == n && (t.abbr = e), (a = new j(t)).parentLocale = tt[e], tt[e] = a), st(e)
                        } else null != tt[e] && (null != tt[e].parentLocale ? (tt[e] = tt[e].parentLocale, e === st() && st(e)) : null != tt[e] && delete tt[e]);
                        return tt[e]
                    }, r.locales = function() { return D(tt) }, r.weekdaysShort = function(e, t, a) { return ba(e, t, a, "weekdaysShort") }, r.normalizeUnits = z, r.relativeTimeRounding = function(e) { return void 0 === e ? Ua : "function" == typeof e && (Ua = e, !0) }, r.relativeTimeThreshold = function(e, t) { return void 0 !== Ja[e] && (void 0 === t ? Ja[e] : (Ja[e] = t, "s" === e && (Ja.ss = t - 1), !0)) }, r.calendarFormat = function(e, t) { var a = e.diff(t, "days", !0); return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse" }, r.prototype = pa, r.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, r
                }()
            }).call(this, a("YuTi")(e))
        },
        x6pH: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function(e) { return 2 === e ? "שעתיים" : e + " שעות" }, d: "יום", dd: function(e) { return 2 === e ? "יומיים" : e + " ימים" }, M: "חודש", MM: function(e) { return 2 === e ? "חודשיים" : e + " חודשים" }, y: "שנה", yy: function(e) { return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים" } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function(e) { return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e) }, meridiem: function(e, t, a) { return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב" } })
            }(a("wd/R"))
        },
        xutz: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a("XqMk"),
                    r = "object" == typeof exports && exports && !exports.nodeType && exports,
                    i = r && "object" == typeof e && e && !e.nodeType && e,
                    s = i && i.exports === r && n.a.process,
                    o = function() { try { var e = i && i.require && i.require("util").types; return e || s && s.binding && s.binding("util") } catch (t) {} }();
                t.a = o
            }).call(this, a("3UD+")(e))
        },
        yPMs: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, a) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", ss: "%d sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        z1FC: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) { var r = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n míut", "'iens míut"], mm: [e + " míuts", e + " míuts"], h: ["'n þora", "'iensa þora"], hh: [e + " þoras", e + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return n ? r[a][0] : t ? r[a][0] : r[a][1] }
                e.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, t, a) { return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        z3Vd: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function a(e, a, n, r) {
                    var i = function(e) {
                        var a = Math.floor(e % 1e3 / 100),
                            n = Math.floor(e % 100 / 10),
                            r = e % 10,
                            i = "";
                        return a > 0 && (i += t[a] + "vatlh"), n > 0 && (i += ("" !== i ? " " : "") + t[n] + "maH"), r > 0 && (i += ("" !== i ? " " : "") + t[r]), "" === i ? "pagh" : i
                    }(e);
                    switch (n) {
                        case "ss":
                            return i + " lup";
                        case "mm":
                            return i + " tup";
                        case "hh":
                            return i + " rep";
                        case "dd":
                            return i + " jaj";
                        case "MM":
                            return i + " jar";
                        case "yy":
                            return i + " DIS"
                    }
                }
                e.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", ss: a, m: "wa’ tup", mm: a, h: "wa’ rep", hh: a, d: "wa’ jaj", dd: a, M: "wa’ jar", MM: a, y: "wa’ DIS", yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
            }(a("wd/R"))
        },
        zx6S: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, a, n) { var r = t.words[n]; return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r) } };
                e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() { return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] },
                        sameElse: "L"
                    },
                    relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                })
            }(a("wd/R"))
        }
    }
]);