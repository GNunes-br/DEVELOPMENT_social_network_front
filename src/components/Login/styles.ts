import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Content = styled.div`

    flex-direction: column;
    align-items: center;

    min-width: 375px;
    max-width: 960px;
`

export const Body = styled.div`
    margin: ${pxToRemHelper(40)};

    .form-title, .form-content, .form-buttons {
        
        flex-direction: column;
        align-items: center;
    }

    .form-title {
        margin-bottom: ${pxToRemHelper(40)};
    
        img {
            width: ${pxToRemHelper(30)};
            height: ${pxToRemHelper(30)};
        }
    }

    .form-content {

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .form-buttons {
        
        .submit-button {
            margin-top: ${pxToRemHelper(40)};
        }

        .register-button {
            margin-top: ${pxToRemHelper(40)};

            text-align: center;

            a {
                font-weight: bold;
                
                cursor: pointer;
            }
        }
    }
`