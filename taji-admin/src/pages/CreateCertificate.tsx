import React, { useEffect, useState, useRef } from 'react';
import { PDFViewer, Page,Image,  Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';
import Logo from '../images/logo/logo.png'
// import { pdf } from '@react-pdf/renderer'; // Import pdf from react-pdf

interface FormData {
  certificateNo: string;
  name: string;
  course: string;
  dateIssued: string;
  university: string;
}

const DisplayData: React.FC = () => {
  const [formData, setFormData] = useState<FormData[]>([]);

  useEffect(() => {
    // Fetch data from db.json when the component mounts
    fetch(' http://localhost:3000/graduates')
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // Create a ref for printing
  const componentRef = useRef<HTMLDivElement>(null);

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });


  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    text:{
      fontSize: '11px',
      flex: 1, // Adjust the width as needed
      padding: 5,
      // border: 1,
      // borderColor:"#000",
      // borderStyle:"solid",
      margin: "0",
    },
    cert:{
      display: "flex",
      flex:1,
      marginTop:"0",

    },
  
  });
    const pdfData = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
              {formData.map((entry, index) => (
                <View key={index} style={styles.cert}>
                  <Image src="../images/logo/logo.png"/>
                  <Text style={styles.text}>{entry.university}</Text>
                  <Text>This is to certify that</Text>
                  <Text style={styles.text}>{entry.name}</Text>
                  <Text>upon satisfying all the requirements and on there <br/> commendedation of senate
                    is hereby confered the degree of</Text>
                  <Text style={styles.text}>{entry.course}</Text>
                  <Text>with all honours rights and previledges appertaining
                to this degree of the eight Congregation held at this university</Text>
                  <Text style={styles.text}>{entry.dateIssued}</Text>                  
                </View>
              ))}
          </View>
        </Page>
      </Document>
    );

    // Render the JSX to a PDF blob
   



  return (
    <div>
      <div className='flex justify-between items-center mt-4 mb-2'>
      <h1>Form Data</h1>

      <button onClick={handlePrint}>Print</button>
    
        {formData.map((entry) => (
          <PDFDownloadLink document={pdfData}    
          className='bg-green-500 text-primary font-semibold border-1 border-primary cursor-pointer'         
          fileName={`certificate_${entry.name}.pdf`}>
            {/* <PDFViewer>{pdfData}</PDFViewer> */}
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download to PDF'
          
        } 
        </PDFDownloadLink>
            ))}
            </div>
            <div className='h-[1px] w-full bg-stroke my-3'></div>
      <div ref={componentRef}>          
          <div className='w-[595px] h-[842px] p-3 mx-auto bg-white items-center'>
          <img src={Logo} alt="school-logo" width={100} height={50} className='w-[30%] object-cover h-30 mx-auto'/>
            {formData.map((entry, index) => (
              <div key={index} className=''>
                <h1 className='text-2xl uppercase text-center mt-0 text-black font-extrabold font-serif'>{entry.university}</h1>
                
              </div>   
            ))}
            <div>
                <h2 className="font-italic text-center">This is to certify that</h2>
            </div>
            {formData.map((entry, index) => (
              <div key={index} className='my-10'>
                <h1 className='text-2xl my-10 uppercase text-center mt-0 text-black 
                font-bold font-serif'>{entry.name}</h1>
              </div>   
            ))}
            <div>
                <h2 className="font-italic text-center text-sm">         
                   upon satisfying all the requirements and on there <br/> commendedation of senate<br>
                   </br> is hereby confered the degree of
                   </h2>
            </div>
            {formData.map((entry, index) => (
              <div key={index} className='my-10 w-[50%] mx-auto'>
                <h1 className='text-2xl my-10 uppercase text-center  mt-0 text-black 
                font-mono '>{entry.course}</h1>
              </div>   
            ))}
            <div>
                <h2 className="font-italic text-center text-sm">         
                with all honours rights and previledges appertaining <br/>
                to this degree of the eight Congregation held at this university
                   </h2>
            </div>
            {formData.map((entry, index) => (
              <div key={index} className='my-10'>
                <h1 className='text-lg my-10 uppercase text-center mt-0 text-black 
                font-bold font-serif'>{entry.dateIssued}</h1>
              </div>   
            ))}
            <div className='mt-40 mx-10 flex justify-between items-center'>
              <div>
              <div className='h-[1px] w-[170px] mx-auto  bg-black-2'></div>
              <h2 className="font-semibold text-center my-3">Vice chancellor</h2>
              </div>
              <div>
              <div className='h-[1px] w-[170px] mx-auto  bg-black-2'></div>
              <h2 className="font-semibold text-center  my-3">Registrar</h2>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default DisplayData;

