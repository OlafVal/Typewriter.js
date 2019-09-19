// p5.Typewriter
// by Olaf Val
// CC BY 4.0

function Typewriter() {

  this.TyWrTextAll = [];
  this.TyWrTextPrint = [];
  this.TyWrTextDisplay = '';
  this.TyWrL = 0;
  this.TyWrS = ''
  this.TyWrTimer = 0;
  this.TyWrSpeed = 200;
  this.TyWrAlign = 'LEFT';

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

  this.twType = function(TyWrText, x, y) {
    textAlign(LEFT);
    this.TyWrTextAll = TyWrText;
    this.TyWrTextDisplay = join(this.TyWrTextPrint, this.TyWrS);
    if (this.TyWrAlign == 'LEFT') {
      text(this.TyWrTextDisplay, x, y);
    }
    if (this.TyWrAlign == 'RIGHT') {
      text(this.TyWrTextDisplay, x - textWidth(this.TyWrTextDisplay), y);
    }
    if (this.TyWrAlign == 'CENTER') {
      text(this.TyWrTextDisplay, x - textWidth(this.TyWrTextDisplay) / 2, y);
    }

    if (millis() > this.TyWrTimer + this.TyWrSpeed) {
      this.TyWrTimer = millis();
      if (this.TyWrL < TyWrText.length) {

        append(this.TyWrTextPrint, TyWrText[this.TyWrL]);
        this.TyWrL++;
      }
    }
  }

}
