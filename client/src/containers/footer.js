import React from 'react'
import {Footer} from '../components';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>질문이 있으신가요? 문의 전화: 080-001-9587 </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                <Footer.Link 
                    href="https://help.netflix.com/support/412"
                    target="blank" 
                    // onClick={(e) => e.preventDefault()}
                    >
                        자주묻는 질문
                    </Footer.Link>
                <Footer.Link 
                   href="http://ir.netflix.com/" 
                   target="blank" 
                //    onClick={(e) => e.preventDefault()}
                >
                        고객센터
                </Footer.Link>
                <Footer.Link 
                   href="https://www.netflix.com/youraccount"
                   target="blank"  
                //    onClick={(e) => e.preventDefault()}
                >
                        계정
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                       미디어 센터
                </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                         투자정보 (IR)
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                         입사 정보
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                       쿠키 설정
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                       법적 고지
                </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        계정
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        넷플릭스 지원 디바이스
                </Footer.Link>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        회사 정보
                </Footer.Link>
                 <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        오직 넷플릭스에서
                </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        미디어 센터
                </Footer.Link>
                 <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        이용 약관
                </Footer.Link>
                 <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
                        문의하기
                </Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>넷플릭스 대한민국</Footer.Text>
        </Footer>
    )
}