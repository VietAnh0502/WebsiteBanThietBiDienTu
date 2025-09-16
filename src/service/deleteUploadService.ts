import fs from 'fs';

export const deleteImage = (filePath: string) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Failed to delete file: ${filePath}`, err);
        } else {
            console.log(`Successfully deleted file: ${filePath}`);
        }
    });
};
