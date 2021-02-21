import csv from 'csv-parser';
import fs from 'fs';

/**
 * loads the file asynchronously using a stream and returns a promise
 * @param fileName the file to parse
 */
export const loadFile = (fileName: string): Promise<Record<string, string>[]> => {
  return new Promise<Record<string, string>[]>((resolve, reject) => {
    const data: Record<string, string>[] = [];
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
