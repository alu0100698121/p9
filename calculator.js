/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"block":4,"DOT":5,"cont":6,"var":7,"procedure":8,"s":9,"PROCEDURE":10,"ID":11,"(":12,"parameters":13,")":14,"BEGIN":15,"END":16,";":17,"e":18,"otro_parameter":19,"COMMA":20,"VAR":21,"var_otra":22,"CONST":23,"=":24,"NUMBER":25,"cont_otra":26,"CALL":27,"IF":28,"c":29,"THEN":30,"ELSE":31,"COMPARISON":32,"ODD":33,"+":34,"-":35,"*":36,"/":37,"E":38,"PI":39,"$accept":0,"$end":1},
terminals_: {2:"error",5:"DOT",10:"PROCEDURE",11:"ID",12:"(",14:")",15:"BEGIN",16:"END",17:";",20:"COMMA",21:"VAR",23:"CONST",24:"=",25:"NUMBER",27:"CALL",28:"IF",30:"THEN",31:"ELSE",32:"COMPARISON",33:"ODD",34:"+",35:"-",36:"*",37:"/",38:"E",39:"PI"},
productions_: [0,[3,2],[4,4],[8,10],[8,0],[13,2],[13,0],[19,3],[19,0],[7,4],[7,0],[22,3],[22,0],[6,6],[6,0],[26,5],[26,0],[9,4],[9,6],[9,6],[9,4],[29,3],[29,2],[18,3],[18,3],[18,3],[18,3],[18,2],[18,3],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
          this.$ = $$[$0-1]; 
          console.log(this.$);
          return [this.$, symbol_table];
        
break;
case 2: this.$ = [];
            if ($$[$0-3]) this.$.push($$[$0-3]);
            if ($$[$0-2]) this.$.push($$[$0-2]);
            if ($$[$0-1]) this.$.push($$[$0-1]);
            this.$.push($$[$0]);
            console.log(this.$);
          
break;
case 3: this.$ = [{
                type: 'PROCEDURE',
                id: $$[$0-8],
                parameters: $$[$0-6],
                block: $$[$0-3]
                }];

           var tabla_proc = [{
		id: $$[$0-8]
		n_par: $$[$0-6].length;
	   }];

		if ($$[$0]) { this.$.concat($$[$0]);};
         
break;
case 5: this.$ = [{
                value: $$[$0-1]
                }];

           if ($$[$0]) { this.$.concat($$[$0]);};
         
break;
case 7: this.$ = [{
                value: $$[$0-1]
                }];

                if ($$[$0]) { this.$.concat($$[$0]);};
         
break;
case 9:this.$ = [{
	      type: 'VAR',
	      right: $$[$0-2]	    
	      }];
	      
	      if($$[$0-1]) { this.$.concat($$[$0-1]); };
	 
break;
case 11:this.$ = [{
	      type: 'VAR',
	      right: $$[$0-1]	    
	      }];
	      
	      if ($$[$0]) { this.$.concat($$[$0]);};
	 
break;
case 13:this.$ = [{
	      type: 'CONST',
	      left: $$[$0-4],
	      right: $$[$0-2]     
	      }];
	      
	      if($$[$0-1]){ this.$.concat($$[$0-1]);};
	
break;
case 15:this.$ = [{
	      type: 'CONST',
	      left: $$[$0-3],
	      right: $$[$0-1]     
	      }];
	      
	      if($$[$0]){ this.$.concat($$[$0]);};
	 
break;
case 17:this.$ = {
	      type: "=",
	      left: $$[$0-3],
	      right: $$[$0-1]	    
	      };
	 
break;
case 18:this.$ = {
              type: 'CALL',
              value: $$[$0-4],
              parameters: $$[$0-2]
              };
         
break;
case 19:this.$ = {
		type:'IFELSE',
		condition: $$[$0-4],
		true_statement: $$[$0-2],
		else_statement: $$[$0]
		};
	 
break;
case 20:this.$ = {
	       type:'IF',
	       condition: $$[$0-2],
	       true_statement: $$[$0]
	      };
	
break;
case 21: this.$ = {
		type: $$[$0-1],
		left: $$[$0-2],
		right: $$[$0]
		};
	
break;
case 22: this.$ = {
		type: "ODD",
		right: $$[$0]
		};
	
break;
case 23:this.$ = {
	      type: "+",
	      left: $$[$0-2],
	      right: $$[$0]	    
	      };
        
break;
case 24:this.$ = {
	      type: "-",
	      left: $$[$0-2],
	      right: $$[$0]	    
	      };
        
break;
case 25:this.$ = {
	      type: "*",
	      left: $$[$0-2],
	      right: $$[$0]	    
	      };
        
break;
case 26:
          if ($$[$0] == 0) throw new Error("Division by zero, error!");
         this.$ = {
	      type: "/",
	      left: $$[$0-2],
	      right: $$[$0]	    
	      };
        
break;
case 27:this.$ = {
	      type: "UMINUS",
	      value: $$[$0],   
	      };
        
break;
case 28:this.$ = {
	      type: "()",
	      value: $$[$0-1],   
	      };
        
break;
case 29:this.$ = Number(yytext);
break;
case 30:this.$ = Math.E;
break;
case 31:this.$ = Math.PI;
break;
case 32: this.$ = symbol_table[yytext] || 0; 
break;
}
},
table: [{3:1,4:2,6:3,10:[2,14],11:[2,14],21:[2,14],23:[1,4],27:[2,14],28:[2,14]},{1:[3]},{5:[1,5]},{7:6,10:[2,10],11:[2,10],21:[1,7],27:[2,10],28:[2,10]},{11:[1,8]},{1:[2,1]},{8:9,10:[1,10],11:[2,4],27:[2,4],28:[2,4]},{11:[1,11]},{24:[1,12]},{9:13,11:[1,14],27:[1,15],28:[1,16]},{11:[1,17]},{17:[2,12],20:[1,19],22:18},{25:[1,20]},{5:[2,2],16:[2,2]},{24:[1,21]},{11:[1,22]},{11:[1,31],12:[1,27],18:24,25:[1,28],29:23,33:[1,25],35:[1,26],38:[1,29],39:[1,30]},{12:[1,32]},{17:[1,33]},{11:[1,34]},{17:[2,16],20:[1,36],26:35},{11:[1,31],12:[1,27],18:37,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{12:[1,38]},{30:[1,39]},{32:[1,40],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{11:[1,31],12:[1,27],18:45,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:46,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:47,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{14:[2,29],17:[2,29],20:[2,29],30:[2,29],32:[2,29],34:[2,29],35:[2,29],36:[2,29],37:[2,29]},{14:[2,30],17:[2,30],20:[2,30],30:[2,30],32:[2,30],34:[2,30],35:[2,30],36:[2,30],37:[2,30]},{14:[2,31],17:[2,31],20:[2,31],30:[2,31],32:[2,31],34:[2,31],35:[2,31],36:[2,31],37:[2,31]},{14:[2,32],17:[2,32],20:[2,32],30:[2,32],32:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32]},{11:[1,31],12:[1,27],13:48,14:[2,6],18:49,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{10:[2,9],11:[2,9],27:[2,9],28:[2,9]},{17:[2,12],20:[1,19],22:50},{17:[1,51]},{11:[1,52]},{17:[1,53],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{11:[1,31],12:[1,27],13:54,14:[2,6],18:49,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{9:55,11:[1,14],27:[1,15],28:[1,16]},{11:[1,31],12:[1,27],18:56,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:57,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:58,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:59,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{11:[1,31],12:[1,27],18:60,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{30:[2,22],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{14:[2,27],17:[2,27],20:[2,27],30:[2,27],32:[2,27],34:[2,27],35:[2,27],36:[2,27],37:[2,27]},{14:[1,61],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{14:[1,62]},{14:[2,8],19:63,20:[1,64],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{17:[2,11]},{10:[2,13],11:[2,13],21:[2,13],27:[2,13],28:[2,13]},{24:[1,65]},{5:[2,17],16:[2,17],31:[2,17]},{14:[1,66]},{5:[2,20],16:[2,20],31:[1,67]},{30:[2,21],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{14:[2,23],17:[2,23],20:[2,23],30:[2,23],32:[2,23],34:[2,23],35:[2,23],36:[1,43],37:[1,44]},{14:[2,24],17:[2,24],20:[2,24],30:[2,24],32:[2,24],34:[2,24],35:[2,24],36:[1,43],37:[1,44]},{14:[2,25],17:[2,25],20:[2,25],30:[2,25],32:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25]},{14:[2,26],17:[2,26],20:[2,26],30:[2,26],32:[2,26],34:[2,26],35:[2,26],36:[2,26],37:[2,26]},{14:[2,28],17:[2,28],20:[2,28],30:[2,28],32:[2,28],34:[2,28],35:[2,28],36:[2,28],37:[2,28]},{15:[1,68]},{14:[2,5]},{11:[1,31],12:[1,27],18:69,25:[1,28],35:[1,26],38:[1,29],39:[1,30]},{25:[1,70]},{17:[1,71]},{9:72,11:[1,14],27:[1,15],28:[1,16]},{4:73,6:3,10:[2,14],11:[2,14],21:[2,14],23:[1,4],27:[2,14],28:[2,14]},{14:[2,8],19:74,20:[1,64],34:[1,41],35:[1,42],36:[1,43],37:[1,44]},{17:[2,16],20:[1,36],26:75},{5:[2,18],16:[2,18],31:[2,18]},{5:[2,19],16:[2,19],31:[2,19]},{16:[1,76]},{14:[2,7]},{17:[2,15]},{17:[1,77]},{8:78,10:[1,10],11:[2,4],27:[2,4],28:[2,4]},{11:[2,3],27:[2,3],28:[2,3]}],
defaultActions: {5:[2,1],50:[2,11],63:[2,5],74:[2,7],75:[2,15]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var symbol_table = {};

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ PI: 'PI', E : 'E', VAR: 'VAR', CONST: 'CONST', ODD: 'ODD' ,IF : 'IF', THEN : 'THEN', ELSE : 'ELSE',WHILE : 'WHILE', PROCEDURE : 'PROCEDURE', BEGIN: 'BEGIN', END: 'END', CALL: 'CALL'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 25
break;
case 2:return idORrw(yy_.yytext)
break;
case 3:return 32
break;
case 4:return yy_.yytext;
break;
case 5:return 5
break;
case 6:return 20
break;
case 7:return 'INVALID'
break;
case 8:return 'EOF'
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[<>=!][=]|[<>])/,/^(?:[-*/+^!%=();])/,/^(?:\.)/,/^(?:,)/,/^(?:.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.Parser = calculator.Parser;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}