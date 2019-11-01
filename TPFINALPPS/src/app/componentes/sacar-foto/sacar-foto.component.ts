import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-sacar-foto',
  templateUrl: './sacar-foto.component.html',
  styleUrls: ['./sacar-foto.component.scss'],
})
export class SacarFotoComponent implements OnInit {
  image: string;

  constructor(private camera: Camera, private webView: WebView) { }

  ngOnInit() {

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 400,
      targetWidth: 400,
      //destinationType: this.camera.DestinationType.DATA_URL,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //sourceType: this.camera.PictureSourceType.CAMERA
    };
    console.log("entro");
    this.camera.getPicture(options).then((ImageData) => {
      //this.image = 'data:image/jpeg;base64,' + ImageData;
      
      this.image = this.webView.convertFileSrc(ImageData);
      console.log(this.image);
    }, (err) => {
      console.log(err);
    });

		/*	const options: CameraOptions = {
				quality: 100,
				targetHeight: 400,
				targetWidth: 400,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
				correctOrientation: true,
				allowEdit: true,
			}

			this.camera.getPicture(options).then((imageData) => {
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = this.webView.convertFileSrc(imageData);
			//	this.image = base64Image;
			}).catch((err) => {
				console.log("Error: ", err);
			});*/


  }

}
