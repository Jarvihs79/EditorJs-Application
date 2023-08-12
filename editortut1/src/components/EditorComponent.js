import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'
//this editorjs is a class that needs to be initialized , so below we will initialize it.
import  Header  from '@editorjs/header'

const EditorComponent = () => {
    const ejInstance= useRef()
    const initeditor = ()=>{
        const editor = new EditorJS({
            
                holder: "editorjs",
                onReady: ()=>{
                    ejInstance.current = editor;
                },
                autofocus: true,
                onChange: async()=>{
                    let content = await editor.saver.save();
                    console.log(content);
                },
                tools:{
                    header:Header
                }
        });
    } 

    useEffect(()=>{
            if(ejInstance.current=== null){
                initeditor();
            }

            return()=>{
                ejInstance?.current?.destroy();
                ejInstance.current=null;
            }
    }, [])
  return (
    //editorjs will be integrated into this div using id attribute.
    <div id='editorjs'>
      
    </div>
  )
}

export default EditorComponent

