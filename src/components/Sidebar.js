import React, { useState, useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';



const Sidebar = ({ onUpdateTitle, onUpdateDesc }) => {
    const [titleValue, setTitleValue] = useState("");
    const [descValue, setDescValue] = useState("");

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3333/data');
        setTitleValue(response.data.title);
        setDescValue(response.data.description);
        onUpdateTitle(response.data.title);
        onUpdateDesc(response.data.description);
    };

    const handleSubmit = async data => {
        try {
          const response = await axios.post('http://localhost:3333/data', data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-content items-center">
            <div className='p-4'>Title</div>
            <input className="p-8 bg-white border border-gray-400 rounded-lg"
                type="text"
                value={titleValue}
                onChange={(e) => {
                    setTitleValue(e.target.value);
                    onUpdateTitle(e.target.value);
                }}
            />
            <div className='p-4 mt-8'>Description</div>
            <input className="p-8 bg-white border border-gray-400 rounded-lg"
                type="text"
                value={descValue}
                onChange={(e) => {
                    setDescValue(e.target.value);
                    onUpdateDesc(e.target.value);
                }}
            />
            <a className=" largeText border-2 min-w-[200px] text-[#0086CB] md:w-36 sm:w-96 w-80 h-10 mt-11 mb-16 sm:mb-10 md:mb-0 text-center text-red rounded-full items-center py-1 hover:text-white hover:bg-[#0086CB] border-[#0086CB] "
                href="#"
                onClick={() => {
                    fetchData();
                }}
            >Reset</a>
            <a className=" largeText border-2 min-w-[200px] text-[#0086CB] md:w-36 sm:w-96 w-80 h-10 mt-11 mb-16 sm:mb-10 md:mb-0 text-center text-red rounded-full items-center py-1 hover:text-white hover:bg-[#0086CB] border-[#0086CB] "
                href="#"
                onClick={() => {
                    const data = {"title": titleValue, "description": descValue};
                    handleSubmit(data);
                }}
            >Save</a>
        </div>
    );
}

export default Sidebar;

