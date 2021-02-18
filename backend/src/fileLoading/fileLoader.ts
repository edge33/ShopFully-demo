import csv from 'csv-parser';
import fs from 'fs';

export const loadFile = (fileName: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    const data: string[] = [];
    fs.createReadStream(fileName)
      .on('error', () => {
        reject('file not found...');
      })
      .pipe(csv())
      .on('error', () => {
        reject('error parsing file...');
      })
      .on('data', row => {
        data.push(row);
      })
      .on('end', () => {
        resolve(data);
      });
  });
};
