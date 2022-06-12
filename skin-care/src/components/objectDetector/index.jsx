import React, { useState, useRef } from "react";
import styled from "styled-components";

import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ObjectDetectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetectorContainer = styled.div`
    min-width: 200px;
    height: 700px;
    border: 3px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TargetImg = styled.img`
    height: 100%;
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const SelectButton = styled.button`
    padding: 7px 10px;
    border: 2px solid transparent;
    background-color: #fff;
    color: black;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    margin-top: 2em;
    cursor: pointer;
    transition: all 260ms ease-in-ot;

    &:hover {
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`;

const TargetBox = styled.div`
    position: absolute;

    left: ${({ x }) => x + "px"};
    top: ${({ y }) => y + "px"};
    width: ${({ width }) => width + "px"};
    height: ${({ height }) => height + "px"};

    border: 4px solid lime;
    background-color: transparent;
    z-index: 20;

    &::before {
        content: "${({ classType, score }) => 
        `${classType} ${score.toFixed(2)}`}";
        color: lime;
        font-weight: 500;
        font-size: 17px;
        position: absolute;
        top: -1.5em;
        left: -5px;
    }
`;

export function ObjectDetector(props) {
    const fileInputRef = useRef();
    const [imgData, setImgData] = useState(null);
    const [predictions, setPredictions] = useState([]);

    const isEmptypredictions = !predictions || predictions.length === 0;

    const openFilePicker = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const detectObjectsOnImage = async (imageElement) => {
        const model = await cocoSsd.load({ });
        const predictions = await model.detect(imageElement, 6);
        setPredictions(predictions);
        console.log("Predictions: ", predictions);
    };

    const readImage = (file) => {
        return new Promise((rs, rj) => {
            const fileReader = new FileReader();
            fileReader.onload = () => rs(fileReader.result);
            fileReader.onerror = () => rj(fileReader.error);
            fileReader.readAsDataURL(file);
        })
    };

    const onSelectImage = async (e) => {
        const file = e.target.files[0];
        const imgData = await readImage(file);
        setImgData(imgData);

        const imageElement = document.createElement("img");
        imageElement.src = imgData;

        imageElement.onload = async () => {
            await detectObjectsOnImage(imageElement);
        };

    };

    return (
        <ObjectDetectorContainer>
            <DetectorContainer>
                {imgData && <TargetImg src={imgData} />}
                {!isEmptypredictions && predictions.map((predictions, idx) => (
                    <TargetBox 
                    key={idx} 
                    x={predictions.bbox[0]} 
                    y={predictions.bbox[1]}
                    width={predictions.bbox[2]} 
                    height={predictions.bbox[3]}
                    classType={predictions.class}
                    score={predictions.score}
                    />
                ))}
            </DetectorContainer>
            <HiddenFileInput type="file" ref={fileInputRef} onChange={onSelectImage} />
            <SelectButton onClick={openFilePicker}>Select Image</SelectButton>
        </ObjectDetectorContainer>
    );
}