import styled from 'styled-components';

export const FooterTop = styled.div`
    background: var(--eerie-black-2);
    padding: 60px 0;
    overflow: hidden;
    
    .footer-brand{
        margin-bottom: 40px;
        .logo{margin-bottom: 25px;}

        
        .social-title{
            color: var(--white);
            font-size: var(--fs-4);
            margin-bottom: 25px;
        }

        .social-list{
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
            .social-link{
                padding: 9px 13px;
                font-size: 20px;
                border-radius: 50%;
                color: var(--quick-silver);
                transition: var(--transition);
                background: var(--eerie-black-1);
                
                &:hover{
                    color: var(--golden-puppy);
                }
            }
        }
    }

    .footer-link-box{
        gap: 25px;
        display: grid;
        grid-template-columns: 1fr;

        .footer-item-title{
            margin-bottom: 10px;
            font-weight: var(--fw-500);
        }
        .footer-item{
            position: relative;
            transition: var(--transition);
            
            &::before{
                content: "";
                top: 5px;
                left: 0;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                position: absolute;
                transition: var(--transition);
                background: var(--quick-silver);
                border: 2px solid var(--sonic-silver);
            }
            
            .footer-link{
                font-size: var(--fs-7);
                margin-bottom: 8px;
                margin-left: 15px;
                color: var(--quick-silver);
                transition: var(--transition);
            }

            &:hover::before{ 
                background: var(--golden-puppy);
                border-color:var(--field-drab);
            }

            &:hover .footer-link{
                color: var(--golden-puppy);
            }

            &:hover::before,
            &:hover .footer-link
            {
                transform: translateX(10px);
            }
        }
    }

`

export const FooterBottom = styled.div`
    background: var(--eerie-black-1);
    padding: 60px 0;
    color: var(--quick-silver);
    .copyright{
        padding: 0 20px;
        text-align: center;
        margin-bottom: 15px;
        font-size: var(--fs-7);
        
        a{
            display: inline-block;
            color: var(--white);
            &:hover{
                color: var(--golden-puppy);
            }
        }
    }
    .more-text{
        text-align: center;
        margin-bottom: 6px;
        font-size: var(--fs-7);
    }
    .footer-bottom-links{
        display: flex;
        gap: 10px;
        padding: 0 20px;
        flex-wrap : wrap;
        align-items: center;
        justify-content: center;
        a{
            color: var(--quick-silver);
            font-size: var(--fs-7);
            transition: var(--transition);
            &:hover{
                color: var(--golden-puppy);
            }
        }
    }
`