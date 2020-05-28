import React from 'react';
import StickyHeader from 'react-sticky-header';
import './Header.css';

function header (props){
    return(
        <div className="header">
          {/* <StickyHeader
            header={
              <div className="Header_root" style={{backgroundColor:"lightblue"}}>
                <h1 className="Header_title" style={{ display: "flex", justifyContent: "center" }}>Restaurant App</h1>
              </div>
            }
            className="sticky"
            
          >
          </StickyHeader> */}
          Restaurant App
        </div>
    );
}

export default header;