import { TextValidator } from './textValidator'
const imageFormatMessage = "png or jpg file, size less than 1 MB";
const imageSrcPattern = /^(data:image\/(p?jpe?g?|png|p?tif);base64)/;
const imageMinLength = 16 * 1024;
const imageMaxLength = 2 * 1024 * 1024;

class ImageValidator extends TextValidator {
    constructor() {
        super(
            "Image",
            imageFormatMessage,
            [
                {
                    regex: imageSrcPattern,
                    message: " is not a valid image format."
                }
            ],
            imageMinLength,
            imageMaxLength
        );
    }

}

export { ImageValidator }

