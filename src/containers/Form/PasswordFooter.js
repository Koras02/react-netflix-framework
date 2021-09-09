import React from 'react'
import {PassWordFooter} from '../../components';


export function PassWordFooterContainer() {
    return (
        <PassWordFooter>
            <PassWordFooter.Title>질문이 있으신가요? 문의 전화: 080-001-9587 </PassWordFooter.Title>
            <PassWordFooter.Break />
            <PassWordFooter.Row>
                <PassWordFooter.Column>
                <PassWordFooter.Link 
                    href="https://help.netflix.com/support/412"
                    target="blank" 
                    // onClick={(e) => e.preventDefault()}
                    >
                        자주묻는 질문
                    </PassWordFooter.Link>
                <PassWordFooter.Link 
                   href="http://ir.netflix.com/" 
                   target="blank" 
                //    onClick={(e) => e.preventDefault()}
                >
                        고객센터
                </PassWordFooter.Link>
                <PassWordFooter.Link 
                   href="https://www.netflix.com/youraccount"
                   target="blank"  
                //    onClick={(e) => e.preventDefault()}
                >
                        계정
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                       미디어 센터
                </PassWordFooter.Link>
                </PassWordFooter.Column>

                <PassWordFooter.Column>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                         투자정보 (IR)
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                         입사 정보
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                       쿠키 설정
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                       법적 고지
                </PassWordFooter.Link>
                </PassWordFooter.Column>

                <PassWordFooter.Column>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        계정
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        넷플릭스 지원 디바이스
                </PassWordFooter.Link>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        회사 정보
                </PassWordFooter.Link>
                 <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        오직 넷플릭스에서
                </PassWordFooter.Link>
                </PassWordFooter.Column>

                <PassWordFooter.Column>
                <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        미디어 센터
                </PassWordFooter.Link>
                 <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        이용 약관
                </PassWordFooter.Link>
                 <PassWordFooter.Link href="#" onClick={(e) => e.preventDefault()}>
                        문의하기
                </PassWordFooter.Link>
                </PassWordFooter.Column>
            </PassWordFooter.Row>
            <PassWordFooter.Break />
            <PassWordFooter.Text>넷플릭스 대한민국</PassWordFooter.Text>
        </PassWordFooter>
    )
}