import React, {useState} from 'react';
import './App.css';

import {useItems} from "./model/items";
import {ItemComponent} from "./components/ItemComponent";

export default () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const {items} = useItems(searchKeyword);
    const [previewItems, setPreviewItems] = useState([]);

    const addItem = (key) => {
        setPreviewItems(previewItems => [...previewItems, items[key]]);
    }


    const remoteItem = (key) => {
        setPreviewItems(previewItems => previewItems.filter((item, index) => index != key));
    }


    const dietaryTypes = [];
    for (let previewItem of previewItems) {
        for (let dietary of previewItem.dietaries) {
            if (!(dietary in dietaryTypes)) {
                dietaryTypes[dietary] = 0;
            }
            dietaryTypes[dietary]++;
        }
    }

    return (
        <div className="wrapper">
            <div className="menu-summary">
                <div className="container">
                    <div className="row">
                        <div className="col-6 menu-summary-left">
                            <span>{previewItems.length} items</span>
                        </div>
                        <div className="col-6 menu-summary-right">
                            {Object.keys(dietaryTypes).map((key) => {
                                {
                                    const value = dietaryTypes[key];
                                }
                                return (
                                    <>
                                        <span>{dietaryTypes[key]}x</span>
                                        <span className="dietary">{key}</span>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container menu-builder">
                <div className="row">

                    <div className="col-4">
                        <div className="filters">
                            <input className="form-control" placeholder="Name" value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}/>
                        </div>
                        <ul className="item-picker">
                            {items ? Object.keys(items).map((key) => {
                                return <ItemComponent key={key} item={items[key]} onClick={() => addItem(key)}></ItemComponent>
                            }) : null}
                        </ul>
                    </div>

                    <div className="col-8">
                        <h2>Menu preview</h2>
                        <ul className="menu-preview">
                            {Object.keys(previewItems).map((key) => {
                                return <ItemComponent key={key} item={previewItems[key]} direction="remove"
                                             onClick={() => remoteItem(key)}></ItemComponent>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
