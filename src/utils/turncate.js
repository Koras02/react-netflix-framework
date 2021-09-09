// 마우스 모션 설정 
export const turncate = (str,n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}