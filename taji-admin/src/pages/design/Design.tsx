import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js'; // Import html2pdf library

export default function CreativeEditorSDKComponent(): JSX.Element {
  const cesdk_container = useRef<HTMLDivElement | null>(null);
  const [cesdk, setCesdk] = useState<CreativeEditorSDK | null>(null);

  useEffect(() => {
    if (!cesdk_container.current) return;

    let cleanedUp = false;
    let instance: CreativeEditorSDK | undefined;

    CreativeEditorSDK.create(cesdk_container.current, {}).then(
      async (_instance) => {
        instance = _instance;
        if (cleanedUp) {
          instance.dispose();
          return;
        }

        // Initialize the instance and add assets as needed
        await initializeEditor(instance);

        setCesdk(instance);
      },
    );

    const cleanup = () => {
      cleanedUp = true;
      instance?.dispose();
      setCesdk(null);
    };

    return cleanup;
  }, [cesdk_container]);

  async function initializeEditor(instance: CreativeEditorSDK) {
    // You can initialize and configure the editor here
    // For example, populate the asset library with default / demo asset sources.
    await Promise.all([
      instance.addDefaultAssetSources(),
      instance.addDemoAssetSources({ sceneMode: 'Design' }),
    ]);
    await instance.createDesignScene();
  }

  // ...

  async function handleDownload(format: 'png' | 'pdf') {
    if (!cesdk) {
      return;
    }

    try {
      if (format === 'png') {
        const canvas = await html2canvas(
          cesdk_container.current as HTMLElement,
        ); // Assert the type
        const dataUrl = canvas.toDataURL('image/png');

        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'edited-content.png';
        downloadLink.click();
      } else if (format === 'pdf') {
        const content = cesdk_container.current as HTMLElement; // Assert the type
        const pdfOptions = {
          margin: 10,
          filename: 'edited-content.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();

        const blob = new Blob([pdf], { type: 'application/pdf' });
        const downloadUrl = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.download = 'edited-content.pdf';
        downloadLink.click();
      }
    } catch (error) {
      console.error('Error downloading edits:', error);
    }
  }

  // ...
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  {
    /* <button onClick={() => handleDownload('png')}> PNG</button>
          <button onClick={() => handleDownload('pdf')}>PDF</button> */
  }
  return (
    <div>
      <div className="flex justify-end gap-2 items-center">
        <h1>Save</h1>
        <div>
          <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
            <button
              className="sr-only"
              onChange={handleCheckboxChange}
            ></button>
            <span
              onClick={() => handleDownload('png')}
              className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
              }`}
            >
              PDF
            </span>
            <span
              onClick={() => handleDownload('pdf')}
              className={`flex items-center text-[#f4f7ff] bg-primary space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
              }`}
            >
              PNG
            </span>
          </label>
        </div>
      </div>
      <div
        ref={cesdk_container}
        style={{ width: '77vw', height: '80vh' }}
      ></div>
    </div>
  );
}
