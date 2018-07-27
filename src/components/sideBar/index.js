import React, { Component } from 'react';
// import { Accordion, AccordionItem } from 'react-sanfona';
import Accordion from '../../libs/Accordion';
import AccordionItem from '../../libs/AccordionItem';

export default class SideBar extends Component {
    RencerSubSideBar(isRender){
        if(isRender){
            return(
                <Accordion>
                    <AccordionItem title={'test Sub'} parentTag={'ul'}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </AccordionItem>
                </Accordion>
            )
        }
    }
    render() {
        return (
            <Accordion>
                {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,3026,27,28,29,3026,27,28,29,3026,27,28,29,3026,27,28,29,3026,27,28,29,3026,27,28,29,30].map((item, i) => {
                    return (
                        <AccordionItem key={i} title={`Item ${item}`} expanded={item === 1} parentTag={'ul'}>
                            {this.RencerSubSideBar(item === 1)}
                            <li>
                                {`Item ${item+1} content`}
                            </li>
                            <li>
                                {`Item ${item+2} content`}
                            </li>
                            <li>
                                {`Item ${item+3} content`}
                            </li>
                            <li>
                                {`Item ${item+4} content`}
                            </li>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        )
    }
}