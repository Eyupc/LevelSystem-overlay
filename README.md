# LevelSystem-overlay
To use this overlay you have to use the LevelSystem Plugin: <br/>
Repo: https://github.com/Eyupc/LevelSystem-Plugin <br/>

## Usage
First of all, you need to run a few commands: <br/>
**npm i** <br/>
**npm run build** <br/><br/>

After that you have to import the files in your client. (The files in 'build' folder, after running **npm run build**) <br/>
And create a **div with id="levelsystem"**, give it also a **z-index:9999** and **position:absolute**.

## Configuration
You also need to create a script inside the client file. <br/>
An example of a configuration: <br/>

var WSConfiguration = {<br/>
	ws:"ws.host:port",<br/>
	sso:"YOUR_SSO",<br/>
	icons:"ICON_PATH"<br/>
}

## Example
You can find an example in example/client.html

## Images
https://gyazo.com/bd69f98c0b98944b67972a440234507f
https://gyazo.com/4fd6db3ec3540fd31a15550f171eade5
https://gyazo.com/ec6ff00305582811ccb6dbdff82e82cd
## Contact
Discord: Eyup#6692
