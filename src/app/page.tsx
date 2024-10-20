import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import KanbanBoard from "./_components/KanbanBoard";
import Footer from "./_components/Footer";


const Home: React.FC =(props) => {
  return(
    <div className="flex flex-col h-screen bg-gray-900">
      <Header/>
        
         <div className="flex flex-grow">
         <Sidebar />
 
         
         <KanbanBoard />
       </div>
 
       
       <Footer />
     </div>
   );
 };
 
 export default Home;
