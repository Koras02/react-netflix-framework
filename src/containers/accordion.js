import React, { useState } from 'react'
// import { useHistory } from 'react-router'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'
// import * as ROUTES from '../constants/routes';
import { Error } from '../components/form/styles/form';

export function FaqsContainer({ setEmail}) {

 
    const [hasError, setHasError] = useState(false);

  

   const handleChange = (event) => {
       setHasError(false);
       setEmail(event.target.value);
   };

    return (
        <Accordion>
            <Accordion.Title>자주 묻는 질문</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <OptForm>
                <OptForm.Text>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input 
                 
                 type="email" 
                 placeholder="이메일 주소"
                 onChange={handleChange}
                 hasError={hasError}
                 />
                     {hasError && <Error>이메일 주소를 입력해 주세요.</Error>}

                <OptForm.Button>시작하기</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}

 