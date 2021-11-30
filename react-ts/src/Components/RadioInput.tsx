import * as React from 'react';
import styles from '../Stylesheets/RadioInput.module.css';

interface RadioInputProps {
    categoryName: string,
    categoryId: string,
    categoryDesc: string,
    stagedSubmission: any,
}

function RadioInput(props:RadioInputProps){
    return(      
        <div className = {styles.RadioInputDiv}>     
            <div style = {{textAlign: 'center'}}>{props.categoryName}</div>
            <div className = {styles.RadioInput}>
                <span>1</span>
                <input type = 'radio' name = {props.categoryName} value = '1' onClick = {() => {props.stagedSubmission[props.categoryId] = 1}}/>
                <input type = 'radio' name = {props.categoryName} value = '2' onClick = {() => {props.stagedSubmission[props.categoryId] = 2}}/>
                <input type = 'radio' name = {props.categoryName} value = '3' onClick = {() => {props.stagedSubmission[props.categoryId] = 3}}/>
                <input type = 'radio' name = {props.categoryName} value = '4' onClick = {() => {props.stagedSubmission[props.categoryId] = 4}}/>
                <input type = 'radio' name = {props.categoryName} value = '5' onClick = {() => {props.stagedSubmission[props.categoryId] = 5}}/>
                <span>5</span>
            </div>
            <div className = {styles.RadioInputDesc}>
                <span>Least</span>
                <div />
                <div />
                <div />
                <div />
                <div />
                <span>Most</span>
            </div>
        </div>
    )
}

export default RadioInput;