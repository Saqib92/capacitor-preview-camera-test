import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import '@capacitor-community/camera-preview';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController
  ) {}

  ionViewDidEnter(){
    this.startCamera();
  }

  async ionViewWillLeave(){
    await CameraPreview.stop()
  }

  startCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      width: window.screen.width,
      height: 300,
      parent: "content",
      toBack: true,
      y: 56,
      enableHighResolution: true
    };
    CameraPreview.start(cameraPreviewOptions)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('canclled')
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('confirmed')
          },
        },
      ],
    });

    await alert.present();
  }

}
