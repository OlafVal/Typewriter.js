// p5.Typewriter
// by Olaf Val
// CC BY 4.0

function Typewriter() {

  this.TyWrTextAll = [];
  this.TyWrTextPrint = [];
  this.TyWrTextDisplay = '';
  this.TyWrL = 0;
  this.TyWrLine = 0;
  this.TyWrS = ''
  this.TyWrTimer = 0;
  this.TyWrSpeed = 200;
  this.TyWrAlign = 'LEFT';
  this.TyWrX;
  this.TyWrY;
  this.TyWrW;
  this.TyWrH;
  this.testLine = '';
  this.nextBreak = 0;

  this.twAlign = function(t) {
    if (t == 'LEFT') {
      this.TyWrAlign = 'LEFT';
    }
    if (t == 'CENTER') {
      this.TyWrAlign = 'CENTER';
    }
    if (t == 'RIGHT') {
      this.TyWrAlign = 'RIGHT';
    }
  }

  this.twRestart = function() {
    this.TyWrL = 0;
    this.TyWrTextPrint = [];
    this.TyWrTextDisplay = '';
  }

  this.twSpeed = function(s) {
    this.TyWrSpeed = s;
  }

  this.twCompleted = function() {
    if (this.TyWrL < this.TyWrTextAll.length) {
      return false;
    } else {
      if (this.TyWrTextAll.length > 0) {
        return true;
      }

    }
  }

  this.twBox = function(x, y, w, h) {
    this.TyWrX = x;
    this.TyWrY = y;
    this.TyWrW = w;
    this.TyWrH = h;

    rect(x, y, w, h);
  }

  this.twType = function(TyWrText, x, y) {
    var boxMode;
    if (this.TyWrW == undefined) {
      this.TyWrX = x;
      this.TyWrY = y;
      boxMode = 0;
    } else {
      boxMode = 1;
    }
    
    textAlign(LEFT);

    if (boxMode == 0) {
      if (this.TyWrAlign == 'LEFT') {
        text(this.TyWrTextDisplay, this.TyWrX, this.TyWrY + textSize());
      }
      if (this.TyWrAlign == 'RIGHT') {
        text(this.TyWrTextDisplay, x - textWidth(this.TyWrTextDisplay), y);
      }
      if (this.TyWrAlign == 'CENTER') {
        text(this.TyWrTextDisplay, x - textWidth(this.TyWrTextDisplay) / 2, y);
      }
    } else {
      text(this.TyWrTextDisplay, this.TyWrX, this.TyWrY + textSize());
    }

    if (millis() > this.TyWrTimer + this.TyWrSpeed) {
      this.TyWrTimer = millis();
      this.TyWrTextAll = TyWrText;
      if (this.TyWrL < TyWrText.length) {

        if (this.TyWrSpeed == 0) {
          this.TyWrTextPrint = TyWrText;
        } else {
          append(this.TyWrTextPrint, TyWrText[this.TyWrL]);
        }

        // go through all letters of the current printString 
        this.TyWrTextDisplay = '';
        this.TyWrLine = 0;
        for (var f1 = 0; f1 < this.TyWrTextPrint.length; f1++) {


          if (this.TyWrTextPrint[f1] == ' ') {

            this.nextBreak = 0;
            // find nextBreak for the end of the test line
            for (var f2 = 1; f2 < TyWrText.length - f1; f2++) {
              if (TyWrText[f1 + f2] == ' ') {

                this.nextBreak = f1 + f2;
                break;
              }
            }

            // build testLine
            this.testLine = '';
            for (f4 = this.TyWrLine; f4 < this.nextBreak; f4++) {
              this.testLine = this.testLine + TyWrText[f4];
            }

            //test if testLine fitts?
            if (textWidth(this.testLine) >= this.TyWrW) {

              // add beack
              this.TyWrTextDisplay = this.TyWrTextDisplay + '\n';
              this.TyWrLine = f1;

            } else {
              // add without beack
              this.TyWrTextDisplay = this.TyWrTextDisplay + this.TyWrTextPrint[f1];

            }
          } else {

            if ((this.TyWrTextPrint[f1] == '<') &&
              (TyWrText[f1 + 1] == 'b') &&
              (TyWrText[f1 + 2] == 'r') &&
              (TyWrText[f1 + 3] == '>')) {
              // add beack
              this.TyWrTextDisplay = this.TyWrTextDisplay + '\n';
              f1 = f1 + 3;
              this.TyWrLine = f1;

            } else {

              // add without beack
              this.TyWrTextDisplay = this.TyWrTextDisplay + this.TyWrTextPrint[f1];
            }
          }
        }

        this.TyWrL++;
      }
    }
  }

}