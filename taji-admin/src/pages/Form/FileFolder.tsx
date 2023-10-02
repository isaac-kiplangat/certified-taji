import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
interface File {
  id: number;
  name: string;
  folder: string;
  type: string;
  size: number;
}
const FileFolder: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const sampleFiles: File[] = [
    {
      id: 1,
      name: 'SampleFile.xlsx',
      folder: 'Graduate List',
      type: 'xlsx',
      size: 1024,
    },
    {
      id: 2,
      name: 'SampleFile2.xlsx',
      folder: 'Graduate List',
      type: 'xlsx',
      size: 1024,
    },
  ];
  useEffect(() => {
    setFiles(sampleFiles);
  }, []);

  const openFile = (file: File) => {
    const fileURL = `/files/${file.name}`;
    window.open(fileURL, '_blank');
  };
  return (
    <>
      <Breadcrumb pageName="Files" />
      <div className="w-full h-screen bg-white  p-3">
        <table className="w-4/5 mx-10">
          <thead>
            <tr className=" w-full items-center justify-between flex ">
              <th>Name</th>
              <th className="mx-15">Folder</th>
              <th>Type</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {files.map((file) => (
              <tr
                key={file.id}
                onClick={() => openFile(file)}
                style={{ cursor: 'pointer' }}
                className="justify-between w-full items-center flex"
              >
                <td>{file.name}</td>
                <td>{file.folder}</td>
                <td>{file.type}</td>
                <td>{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FileFolder;
