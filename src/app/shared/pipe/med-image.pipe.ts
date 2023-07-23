import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medImage'
})
export class MedImagePipe implements PipeTransform {
  transform(imageName: string): string {
    const imageUrl = `https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_${imageName}-med.jpg`;
    return imageUrl;
  }
}

