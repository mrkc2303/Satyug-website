exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cloud-upload-regular-240.1b4fa4a5.png","height":240,"width":240,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42mMAAaf0TYwMaMApbSMjTJIJSMHYkWCcBtEApIFyCMk1QFwO1FnulL5xGbJRbEC8Hqg6AahACogFgQoaHdM21sEU5AM5pVBTHgPxTQYgcEzftNAxbZM3SIE+UPc6oK4Qx/SNDUB2M1DMBahwGRB7M4AA0AQ9oIIooAJFoAJFIDsGiJ0ZoEYxM2ACqMZNTAD5CEOntfS+5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);



const Loader = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "Loading",
        style: {
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.ColorRing, {
            visible: true,
            height: "80",
            width: "80",
            ariaLabel: "blocks-loading",
            wrapperStyle: {},
            wrapperclassName: "blocks-wrapper",
            colors: [
                "#e15b64",
                "#f47e60",
                "#f8b26a",
                "#abbd81",
                "#849b87"
            ]
        })
    });
};


/***/ }),

/***/ 2223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_cloud_upload_regular_240_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8747);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6555);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8565);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_10__]);
([uuid__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import "../assets/css/TestModal.css";

// import { WalletContext } from "../context/WalletContext";






const Modal = ({ onRequestClose , pathName  })=>{
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: walletConnected , 1: setWalletConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: preLoader , 1: setPreLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)().push;
    const { 0: currentAccount , 1: setcurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //   React.useContext(WalletContext);
    let pageName = "";
    if (pathName === "/yogaToken") {
        pageName = "Yoga";
    } else if (pathName === "/dhyanaToken") {
        pageName = "Dhyana";
    }
    const pageText = "Thank You for submitting your video, you will soon be awarded with the " + pageName + " Token";
    const successMessage = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(pageText);
    const handleChangeMedia = (e)=>{
        // console.log(e.target.files[0].name)
        setMedia(e.target.files[0]);
        setLoaded(true);
        console.log(media);
    };
    const { 0: web3Modal , 1: setWeb3Modal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const providerOptions = {
        binancechainwallet: {
            package: true
        },
        walletconnect: {
            package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_3___default()),
            options: {
                infuraId: "eca3650c70d546c2a15702ab9a1c4d73"
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        currentAccount
    ]);
    async function connectWallet() {
        const provider = await web3Modal.connect();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(provider);
        const Account = await web3.eth.getAccounts();
        setcurrentAccount(Account[0]);
        console.log(currentAccount);
        setWalletConnected(true);
    }
    const handleDisconnectWallet = ()=>{
        localStorage.removeItem("walletconnect");
        setcurrentAccount("");
        setWalletConnected(false);
    };
    // const handleSubmitWallet = () => {
    //   connectWallet();
    //   console.log(currentAccount);
    //   currentAccount === ""
    //     ? setWalletConnected(false)
    //     : setWalletConnected(true);
    // };
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onDragEnter = ()=>wrapperRef.current.classList.add("dragover");
    const onDragLeave = ()=>wrapperRef.current.classList.remove("dragover");
    const onDrop = ()=>wrapperRef.current.classList.remove("dragover");
    const handleSubmit = async ()=>{
        setPreLoader(true);
        console.log(media);
        const mediaName = (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)();
        var formData = new FormData();
        formData.append("public_id", `${mediaName}`);
        const url = "https://api.cloudinary.com/v1_1/dde6glimb/video/upload";
        let file = media;
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");
        let response = await fetch(url, {
            method: "POST",
            body: formData
        });
        let data;
        try {
            data = await response.json();
            successMessage();
            setTimeout(()=>{
                navigate("/navigator");
            }, 3000);
        } catch (error) {
            console.log(error);
        }
        console.log(data);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                walletId: currentAccount,
                videoLink: data.secure_url
            })
        };
        fetch("https://sheetdb.io/api/v1/mp8wxfuw1kf49", requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
    // onRequestClose();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                onRequestClose();
            }
        }
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "modal__backdrop",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "modal__container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal__containerHeader",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                children: "Video Upload"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__clossButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    className: "modalButton",
                                    type: "button",
                                    onClick: ()=>{
                                        navigate("/navigator");
                                    },
                                    children: "X"
                                })
                            })
                        ]
                    }),
                    !preLoader && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal__buttonDetails",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal__videoUpload",
                                children: [
                                    !loaded && walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        ref: wrapperRef,
                                        className: "drop-file-input",
                                        onDragEnter: onDragEnter,
                                        onDragLeave: onDragLeave,
                                        onDrop: onDrop,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "drop-file-input__label",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        height: 200,
                                                        width: 200,
                                                        src: __webpack_require__(8747),
                                                        alt: "Uploading IMG"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        children: "Drag & Drop your files here"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "file",
                                                accept: "video/mp4",
                                                value: "",
                                                onChange: (e)=>handleChangeMedia(e)
                                            })
                                        ]
                                    }),
                                    loaded && walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "modal__uploadDone",
                                        children: media === null || media === void 0 ? void 0 : media.name
                                    }),
                                    walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                        className: "modal__containerButton video-upload-wrap",
                                        type: "file",
                                        id: "input_151",
                                        multiple: "",
                                        accept: ".mp4, .mov",
                                        "data-file-minsize": "0",
                                        "data-file-limit": "0",
                                        "data-component": "fileupload",
                                        // onInput={readURL(this)}
                                        hidden: "",
                                        onChange: (e)=>handleChangeMedia(e)
                                    })
                                ]
                            }),
                            walletConnected && media && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__submitButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    className: "btn-hover color-5",
                                    onClick: handleSubmit,
                                    children: "SUBMIT"
                                })
                            }),
                            (!walletConnected || !media) && walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__submitButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    className: "btn-hover-disabled color-disabled-submit",
                                    onClick: handleSubmit,
                                    children: "SUBMIT"
                                })
                            }),
                            !walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__submitButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    className: "btn-hover color-5",
                                    onClick: connectWallet,
                                    children: "Connect To Wallet"
                                })
                            }),
                            walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__submitButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: " color-disabled walletClass",
                                    children: [
                                        "Wallet ID: ",
                                        currentAccount
                                    ]
                                })
                            }),
                            walletConnected && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "modal__submitButton",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    className: "btn-hover color-5",
                                    onClick: handleDisconnectWallet,
                                    children: "Disconnect Wallet"
                                })
                            })
                        ]
                    }),
                    preLoader && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader__WEBPACK_IMPORTED_MODULE_9__/* .Loader */ .a, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_10__.ToastContainer, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark"
            })
        ]
    });
};
Modal.propTypes = {
    onFileChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;