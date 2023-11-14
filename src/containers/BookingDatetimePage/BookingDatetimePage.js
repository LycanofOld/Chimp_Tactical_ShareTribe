import React from 'react';

import { Page, LayoutSingleColumn } from '../../components';
import FooterContainer from '../FooterContainer/FooterContainer';

import css from './BookingDatetimePage.module.css';

export const BookingDatetimePage = props => {
  return (
    <Page title={"Booking Detail"} scrollingDisabled={false}>
      <LayoutSingleColumn footer={<FooterContainer />}>
        <div className={css.root}>
            <div className={css.header}>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_62_2112)">
                    <circle cx="23.5" cy="23.5" r="23.5" transform="matrix(-1 0 0 1 47 0)" fill="white"/>
                    <path d="M18.2934 23.2937C17.9027 23.6843 17.9027 24.3187 18.2934 24.7093L24.2934 30.7093C24.684 31.0999 25.3184 31.0999 25.709 30.7093C26.0996 30.3187 26.0996 29.6843 25.709 29.2937L20.4152 23.9999L25.7059 18.7062C26.0965 18.3155 26.0965 17.6812 25.7059 17.2905C25.3152 16.8999 24.6809 16.8999 24.2902 17.2905L18.2902 23.2905L18.2934 23.2937Z" fill="black"/>
                    </g>
                    <defs>
                    <filter id="filter0_b_62_2112" x="-10" y="-10" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_62_2112"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_62_2112" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <div className={css.headertab}>
                    <div className={css.datetime}>Date + Time</div>
                    <div className={css.payment}>Payment</div>
                </div>
                <div className={css.headeraction}>
                    <div className={css.gethelp}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <g clip-path="url(#clip0_62_2194)">
                                <path d="M4.21348 13.9154C5.38887 14.8484 6.87969 15.4062 8.5 15.4062C10.1203 15.4062 11.6111 14.8484 12.7865 13.9154L10.117 11.2459C9.64219 11.5248 9.0877 11.6875 8.49668 11.6875C7.90566 11.6875 7.35117 11.5281 6.87637 11.2459L4.20684 13.9154H4.21348ZM1.95234 13.9221C0.733789 12.4479 0 10.5619 0 8.5C0 6.43809 0.733789 4.55215 1.95234 3.07793L1.56055 2.68945C1.24844 2.37734 1.24844 1.87266 1.56055 1.56387C1.87266 1.25508 2.37734 1.25176 2.68613 1.56387L3.07793 1.95234C4.55215 0.733789 6.43809 0 8.5 0C10.5619 0 12.4479 0.733789 13.9221 1.95234L14.3105 1.56055C14.6227 1.24844 15.1273 1.24844 15.4361 1.56055C15.7449 1.87266 15.7482 2.37734 15.4361 2.68613L15.0477 3.07793C16.2662 4.55215 17 6.43809 17 8.5C17 10.5619 16.2662 12.4479 15.0477 13.9221L15.4395 14.3105C15.7516 14.6227 15.7516 15.1273 15.4395 15.4361C15.1273 15.7449 14.6227 15.7482 14.3139 15.4361L13.9221 15.0443C12.4479 16.2662 10.5619 17 8.5 17C6.43809 17 4.55215 16.2662 3.07793 15.0477L2.68945 15.4395C2.37734 15.7516 1.87266 15.7516 1.56387 15.4395C1.25508 15.1273 1.25176 14.6227 1.56387 14.3139L1.95566 13.9221H1.95234ZM3.08457 12.7898L5.7541 10.1203C5.47519 9.64551 5.3125 9.09102 5.3125 8.5C5.3125 7.90898 5.47187 7.35449 5.7541 6.87969L3.08457 4.21016C2.15156 5.38887 1.59375 6.87969 1.59375 8.5C1.59375 10.1203 2.15156 11.6111 3.08457 12.7865V12.7898ZM4.21348 3.08457L6.88301 5.7541C7.35781 5.4752 7.9123 5.3125 8.50332 5.3125C9.09434 5.3125 9.64883 5.47188 10.1236 5.7541L12.7865 3.08457C11.6111 2.15156 10.1203 1.59375 8.5 1.59375C6.87969 1.59375 5.38887 2.15156 4.21348 3.08457ZM11.2459 10.1203L13.9154 12.7865C14.8484 11.6111 15.4062 10.1203 15.4062 8.5C15.4062 6.87969 14.8484 5.38887 13.9154 4.21348L11.2459 6.88301C11.5248 7.35781 11.6875 7.9123 11.6875 8.50332C11.6875 9.09434 11.5281 9.64883 11.2459 10.1236V10.1203ZM10.0938 8.5C10.0938 8.07731 9.92584 7.67193 9.62695 7.37305C9.32807 7.07416 8.92269 6.90625 8.5 6.90625C8.07731 6.90625 7.67193 7.07416 7.37305 7.37305C7.07416 7.67193 6.90625 8.07731 6.90625 8.5C6.90625 8.92269 7.07416 9.32807 7.37305 9.62695C7.67193 9.92584 8.07731 10.0938 8.5 10.0938C8.92269 10.0938 9.32807 9.92584 9.62695 9.62695C9.92584 9.32807 10.0938 8.92269 10.0938 8.5Z" fill="#06C167"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_62_2194">
                                <rect width="17" height="17" fill="white" transform="matrix(-1 0 0 1 17 0)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Get help
                    </div>
                    <div className={css.sharequote}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                            <g clip-path="url(#clip0_62_2182)">
                                <path d="M7.1558 0.757324C6.79308 0.415527 6.20402 0.415527 5.84129 0.757324L2.12701 4.25732C1.76429 4.59912 1.76429 5.1542 2.12701 5.496C2.48973 5.83779 3.07879 5.83779 3.44152 5.496L5.57143 3.48896V9.25029C5.57143 9.73428 5.98638 10.1253 6.5 10.1253C7.01362 10.1253 7.42857 9.73428 7.42857 9.25029V3.48896L9.55848 5.496C9.9212 5.83779 10.5103 5.83779 10.873 5.496C11.2357 5.1542 11.2357 4.59912 10.873 4.25732L7.15871 0.757324H7.1558ZM1.85714 10.1253C1.85714 9.64131 1.44219 9.25029 0.928571 9.25029C0.414955 9.25029 0 9.64131 0 10.1253V11.8753C0 13.3245 1.24777 14.5003 2.78571 14.5003H10.2143C11.7522 14.5003 13 13.3245 13 11.8753V10.1253C13 9.64131 12.585 9.25029 12.0714 9.25029C11.5578 9.25029 11.1429 9.64131 11.1429 10.1253V11.8753C11.1429 12.3593 10.7279 12.7503 10.2143 12.7503H2.78571C2.2721 12.7503 1.85714 12.3593 1.85714 11.8753V10.1253Z" fill="#06C167"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_62_2182">
                                <rect width="13" height="14" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Share quote
                    </div>
                </div>    
            </div>
            <div className={css.content}>
                <div className={css.leftcontent}>
                    <div className={css.lefttitle}>
                        Choose a date    
                        <div className={css.subtitle}>We'll confirm availability with your host within 48 hours. You can change this later.</div>
                    </div>          
                    <div className={css.leftform}>
                        <div className={css.formitem}>
                            <div className={css.formitemtext}>Time Zone</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M8.66216 15.0885C9.12603 15.5524 9.87935 15.5524 10.3432 15.0885L17.4682 7.96353C17.9321 7.49966 17.9321 6.74634 17.4682 6.28247C17.0043 5.8186 16.251 5.8186 15.7872 6.28247L9.50083 12.5688L3.2145 6.28618C2.75063 5.82231 1.99731 5.82231 1.53345 6.28618C1.06958 6.75005 1.06958 7.50337 1.53345 7.96724L8.65845 15.0922L8.66216 15.0885Z" fill="#227667"/>
                            </svg>        
                        </div>
                        <div className={css.formitem}>
                            <div className={css.formitemtext}>Choose Date</div>
                            <div className={css.formitemicon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M5.5 1.42308C5.5 0.9125 5.94688 0.5 6.5 0.5C7.05312 0.5 7.5 0.9125 7.5 1.42308V5.57692H12C12.5531 5.57692 13 5.98942 13 6.5C13 7.01058 12.5531 7.42308 12 7.42308H7.5V11.5769C7.5 12.0875 7.05312 12.5 6.5 12.5C5.94688 12.5 5.5 12.0875 5.5 11.5769V7.42308H1C0.446875 7.42308 0 7.01058 0 6.5C0 5.98942 0.446875 5.57692 1 5.57692H5.5V1.42308Z" fill="#06C167"/>
                                </svg>          
                            </div>
                        </div>
                        <div className={css.continuebtn}>Continue</div>
                    </div>          
                </div>
                <div className={css.rightcontent}>
                    <div className={css.bookingdetail}>
                        <div className={css.bookingdetailcontent}>
                            <div className={css.bookingdetailtitle}>Authentic Asian Dumplings</div>          
                            <div className={css.bookingdetailtags}>
                                <div className={css.bookingdetailtag}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <g clip-path="url(#clip0_65_1551)">
                                            <path d="M10.9962 5.49023C10.9962 5.8418 10.7097 6.11719 10.3851 6.11719H9.77396L9.78733 9.24609C9.78733 9.29883 9.78351 9.35156 9.77778 9.4043V9.71875C9.77778 10.1504 9.43594 10.5 9.01389 10.5H8.70833C8.68733 10.5 8.66632 10.5 8.64531 10.498C8.61858 10.5 8.59184 10.5 8.5651 10.5H7.94444H7.48611C7.06406 10.5 6.72222 10.1504 6.72222 9.71875V9.25V8C6.72222 7.6543 6.44913 7.375 6.11111 7.375H4.88889C4.55087 7.375 4.27778 7.6543 4.27778 8V9.25V9.71875C4.27778 10.1504 3.93594 10.5 3.51389 10.5H3.05556H2.44635C2.41771 10.5 2.38906 10.498 2.36042 10.4961C2.3375 10.498 2.31458 10.5 2.29167 10.5H1.98611C1.56406 10.5 1.22222 10.1504 1.22222 9.71875V7.53125C1.22222 7.51367 1.22222 7.49414 1.22413 7.47656V6.11719H0.611111C0.267361 6.11719 0 5.84375 0 5.49023C0 5.31445 0.0572917 5.1582 0.190972 5.02148L5.0875 0.65625C5.22118 0.519531 5.37396 0.5 5.50764 0.5C5.64132 0.5 5.7941 0.539062 5.90868 0.636719L10.7861 5.02148C10.9389 5.1582 11.0153 5.31445 10.9962 5.49023Z" fill="#06C167"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_65_1551">
                                            <rect width="11" height="10" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Bahamas    
                                </div>
                                <div className={css.bookingdetailtag}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <g clip-path="url(#clip0_65_1555)">
                                            <path d="M11.7812 6.5C11.7812 7.79293 11.2248 9.03291 10.2344 9.94715C9.24398 10.8614 7.90067 11.375 6.5 11.375C5.09933 11.375 3.75602 10.8614 2.76559 9.94715C1.77517 9.03291 1.21875 7.79293 1.21875 6.5C1.21875 5.20707 1.77517 3.96709 2.76559 3.05285C3.75602 2.13861 5.09933 1.625 6.5 1.625C7.90067 1.625 9.24398 2.13861 10.2344 3.05285C11.2248 3.96709 11.7812 5.20707 11.7812 6.5ZM0 6.5C0 8.0913 0.68482 9.61742 1.90381 10.7426C3.12279 11.8679 4.77609 12.5 6.5 12.5C8.22391 12.5 9.87721 11.8679 11.0962 10.7426C12.3152 9.61742 13 8.0913 13 6.5C13 4.9087 12.3152 3.38258 11.0962 2.25736C9.87721 1.13214 8.22391 0.5 6.5 0.5C4.77609 0.5 3.12279 1.13214 1.90381 2.25736C0.68482 3.38258 0 4.9087 0 6.5ZM5.89062 3.3125V6.5C5.89062 6.6875 5.99219 6.86328 6.1623 6.96875L8.5998 8.46875C8.8791 8.64219 9.25742 8.57187 9.44531 8.31172C9.6332 8.05156 9.55703 7.70469 9.2752 7.53125L7.10938 6.2V3.3125C7.10938 3.00078 6.8377 2.75 6.5 2.75C6.1623 2.75 5.89062 3.00078 5.89062 3.3125Z" fill="#06C167"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_65_1555">
                                            <rect width="13" height="12" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    2 hours      
                                </div>
                            </div>          
                        </div>
                        <div className={css.bookingdetailimage}></div>    
                    </div>          
                    <div className={css.bookingpersons}>
                        16 guests
                        <div className={css.bookingpersonicon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M8.50988 0.439897L7.37427 1.57542L10.4245 4.62537L11.5601 3.48985C12.1466 2.90332 12.1466 1.95314 11.5601 1.36661L10.6356 0.439897C10.049 -0.146632 9.0988 -0.146632 8.51222 0.439897H8.50988ZM6.844 2.10564L1.37477 7.57679C1.13075 7.82079 0.952436 8.12344 0.853891 8.45424L0.0233004 11.2766C-0.0353571 11.476 0.0186078 11.6895 0.164079 11.835C0.309549 11.9805 0.523063 12.0344 0.720152 11.9781L3.54275 11.1476C3.87358 11.0491 4.17626 10.8707 4.42027 10.6267L9.89419 5.1556L6.844 2.10564Z" fill="#227667"/>
                            </svg>
                        </div>      
                    </div>          
                    <div className={css.totalinvoice}>
                        <div className={css.invoiceitems}>
                            <div className={css.invoicetitle}>Total</div>
                            <div className={css.invoiceitem}>$89.00 x 16 guests</div>
                            <div className={css.invoiceitem}>3% payment processing fee</div>
                            <div className={css.invoiceitem}>Taxes, host and service costs, and domestic shipping.</div>
                        </div>
                        <div className={css.invoicevalues}>
                            <div className={css.invoicetitle}>$1,466.72</div>
                            <div className={css.invoiceitem}>$1,424.00</div>
                            <div className={css.invoiceitem}>$42.72</div>
                            <div className={css.invoiceitem}>Included</div>          
                        </div>
                    </div>          
                </div>
            </div>
        </div>
      </LayoutSingleColumn>
    </Page>
  );
};

export default BookingDatetimePage;