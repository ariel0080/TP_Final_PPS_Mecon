import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/Camera/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/File/ngx';


const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-sacar-foto',
  templateUrl: './sacar-foto.component.html',
  styleUrls: ['./sacar-foto.component.scss'],
})
export class SacarFotoComponent implements OnInit {


  images = [];

  constructor(private camera:Camera, private file:File, private http:HttpClient, private webView:WebView,
    private actionSheetController:ActionSheetController, private toastController:ToastController,
    private storage: Storage, private plt:Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef ) { }

  ngOnInit() {
    this.plt.ready().then(()=>{
      this.loadStoredImages();
    });
  }


  loadStoredImages(){
    this.storage.get(STORAGE_KEY).then(images=> {
      if(images){
        let arr = JSON.parse(images);
        this.images = [];
        for(let img of arr){
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath});
        }
      }
    });
  }

  pathForImage(img){
    if(img === null){
      return '';
    }else{
      let converted = this.webView.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text){
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async selectedImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image Source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
    {
      text: 'Cancel',
      role: 'cancel'
    }
  ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType){
    var options: CameraOptions ={
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/')+1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    });
  }

  copyFileToLocalDir(namePath, currentName, newFileName){
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ =>{
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error mientras se guardaba la foto');
    });
  }

  createFileName(){
    var d = new Date(),
    n=d.getTime(),
    newFileName = n + ".jpg";
    return newFileName;
  }


  updateStoredImages(name){
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if(!arr){
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }
      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });
  }

  deleteImage(imgEntry, position){
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      let arr= JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastindexOf('/')+1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('Archivo borrado');
      });
    });
  }

 startUpload(imgEntry){
  this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
  .then(entry => {
    alert("culo");
  })
 }
}
