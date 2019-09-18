<img src="typewriter-mcluhan.gif" width=200>

# p5.typewriter.js
## A simple little library that writes your text to the screen with Typewriter effect.

- Version 0.5 | 16.09.2019
- by Olaf Val
- CC BY 4.0


## Reference

**Syntax:**
```javascript
tw = new Typewriter();
tw.twTyp(t, x, y);
tw.twSpeed(s);
tw.twAlign(a);
tw.twCompleted() // returns true when the line is finished
```

**Parameters:**
```
t = String (my text)
x = X Position
y = Y Position
s = int Speed (delay in microseconds)
a = text align (LEFT, RIGHT or CENTER)
```


## Examples

<img src="Examples/basic.jpg" width=200><br>
**Basic** 

<img src="Examples/mcluhanquote.jpg" width=200><br>
**McLuhan Quote**

<img src="Examples/chat-meme.png" width=200><br>
**Chat Meme**


## ToDo

- [ ] Fade in effect
- [ ] Zoom in effect
- [ ] Animation directions (lerft, right and center) 

<br>
