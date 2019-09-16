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

  this.twTyp = function(x, y, TyWrText) {
    this.TyWrTextAll = TyWrText;
    this.TyWrTextDisplay = join(this.TyWrTextPrint, this.TyWrS);
    text(this.TyWrTextDisplay, x, y);

    if (millis() > this.TyWrTimer + this.TyWrSpeed) {
      this.TyWrTimer = millis();
      if (this.TyWrL < TyWrText.length) {

        append(this.TyWrTextPrint, TyWrText[this.TyWrL]);
        this.TyWrL++;
      }
    }
  }

}