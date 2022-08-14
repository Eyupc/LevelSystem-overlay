# LevelSystem-overlay
To use this overlay you have to use the LevelSystem Plugin: <br/>
Link: https://github.com/Eyupc/LevelSystem-Plugin <br/>

## Usage
First of all, you need to run some commands: <br/>
**npm i** <br/>
**npm run build** <br/><br/>

After that you have to import the files in your client. <br/>
And create a **div with id="levelsystem"**, give it also a **z-index:9999** and **position:absolute**.

## Configuration
You also need to create a script inside the client file. <br/>
For Example: <br/>

var WSConfiguration = {<br/>
	ws:"ws.host:port",<br/>
	sso:"YOUR_SSO",<br/>
	icons:"ICON_PATH"<br/>
}

## Example
You can find an example in example/client.html
## Contact
Discord: Eyup#6692
