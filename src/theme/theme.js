import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
    colors: {
        pحrimary: {
            100: "#84d9b1",
            500: "#2cbf6c",
        },
        dark: {
            100: "#707070",
            200: "rgba(7, 21, 64, 0.5)",
            500: "#071540",
        },
        light: {
            100: "#ffffff",
            500: "#f2f2f2",
        },
        border: {
            100: "rgba(0, 0, 0, 0.05)",
            200: "rgba(0, 0, 0, 0.1)",
            300: "rgba(0, 0, 0, 0.2)",
            400: "rgba(0, 0, 0, 0.3)",
            500: "rgba(0, 0, 0, 0.4)",
            600: "rgba(0, 0, 0, 0.5)",
        },
        praaaimary: {
            100: "#d3ddf5",
            200: "#a6bbeb",
            300: "#7a99e1",
            400: "#4d77d7",
            500: "#2155cd",
            600: "#1a44a4",
            700: "#14337b",
            800: "#0d2252",
            900: "#071129",
        },
        primary: {
            100: "#cce1ef",
            200: "#99c2e0",
            300: "#66a4d0",
            400: "#3385c1",
            500: "#0D4C94",
            600: "#00528e",
            700: "#003e6a",
            800: "#002947",
            900: "#001523",
        },
        secondary: {
            100: "#fafeff",
            200: "#f6fdfe",
            300: "#f1fbfe",
            400: "#edfafd",
            500: "#e8f9fd",
            600: "#bac7ca",
            700: "#8b9598",
            800: "#5d6465",
            900: "#2e3233",
        },
        accent: {
            100: "#f9eecc",
            200: "#f3dc99",
            300: "#eccb66",
            400: "#e6b933",
            500: "#e0a800",
            600: "#b38600",
            700: "#866500",
            800: "#5a4300",
            900: "#2d2200",
        },
        accent_yellow: {
            100: "#FFECCF",
            200: "#FFDA9E",
            300: "#FFC76E",
            400: "#FFB53D",
            500: "#FFA20D",
            600: "#CC820A",
            700: "#996108",
            800: "#664105",
            900: "#332003",
        },
        success: {
            100: "#E8FAF0",
            200: "#BAEFD1",
            300: "#8CE4B2",
            400: "#5EDA94",
            500: "#2CBF6C",
            600: "#25A15B",
            700: "#1B7341",
            800: "#104527",
            900: "#05170D",
        },
        failure: {
            100: "#F6D6D5",
            200: "#ECAEAB",
            300: "#E38580",
            400: "#D95D56",
            500: "#D0342C",
            600: "#A62A23",
            700: "#7D1F1A",
            800: "#531512",
            900: "#2A0A09",
        },
        gray: {
            100: "#E5E5E7",
            200: "#CACBCF",
            300: "#B0B2B7",
            400: "#95989F",
            500: "#7B7E87",
            600: "#62656C",
            700: "#4A4C51",
            800: "#313236",
            900: "#19191B",
        }
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "black",
            },
        },
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1670px',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "semibold",
                borderRadius: "5px",
                textTransform: "uppercase",
                _focus: {
                    boxShadow: "none"
                }
            },
            sizes: {
                sm: {
                    height: "40px",
                    fontSize: "14px",
                },
                md: {
                    height: "42px",
                    fontSize: "16px",
                },
                huge: {
                    height: '64px',
                    fontSize: '24px'
                }
            },
            variants: {
                primary: {
                    backgroundColor: "accent.500",
                    color: "white",
                    borderWidth: 0,
                    textTransform: "uppercase",
                    _hover: {
                        backgroundColor: "accent.600",
                    },
                    _active: {
                        bg: "accent.400",
                        boxShadow: "none",
                    }
                },
                secondary: {
                    backgroundColor: "accent.500",
                    color: "white",
                    borderWidth: 0,
                    textTransform: "uppercase",
                    _hover: {
                        backgroundColor: "accent.600",
                    },
                    _focus: {
                        border: "1px",
                        borderColor: "primary.700",
                        boxShadow: "none",
                    },
                    svg: {
                        fill: "white",
                    }
                },
                textButton: {
                    backgroundColor: "transparent",
                    p: 0,
                },
                outline: {
                    bg: "transparent",
                    borderWidth: "1px",
                    borderColor: "gray.500",
                    color: "accent.500",
                    svg: {
                        fill: "accent.500"
                    },
                    _hover: {
                        bg: "accent.100"
                    },
                    _active: {
                        bg: "accent.200"
                    }
                },
                success: {
                    bg: "success.500",
                    color: "white",
                    borderWidth: 0,
                    svg: {
                        fill: "white"
                    },
                    _hover: {
                        bg: "success.600",
                    },
                    _active: {
                        bg: "success.700",
                    }
                }
            },
            defaultProps: {
                size: 'md',
                variant: 'primary',


            }
        },
        Heading: {
            baseStyle: {
                fontFamily: "Poppins, Arial",
            },
            sizes: {
                h1: {
                    fontSize: "48px",
                    lineHeight: "1.458",
                },
                h2: {
                    fontSize: "30px",
                    lineHeight: "1.533",
                },
                h3: {
                    fontSize: "24px",
                    lineHeight: "1.583",
                },
                h4: {
                    fontSize: "20px",
                    lineHeight: "1.6",
                },
                h5: {
                    fontSize: "18px",
                    lineHeight: "1.556",
                },
                h6: {
                    fontSize: "16px",
                    lineHeight: "1.625",
                }
            }
        },
        Input: {
            baseStyle: {
                field: {
                    _placeholder: {
                        opacity: 1,
                        color: 'gray.400',
                    },
                    height: "42px",
                    bg: "gray.100",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    borderColor: "#C8C8C8",
                    color: "black",
                    _hover: {
                        bg: "white",
                        borderColor: "accent_yellow.500",
                        _placeholder: {
                            color: "gray.300"
                        }
                    },
                    _focus: {
                        bg: "white",
                        borderColor: "accent_yellow.600",
                    }
                },
            },
        },
        Textarea: {
            baseStyle: {
                _placeholder: {
                    opacity: 1,
                    color: 'gray.400',
                },
                bg: "gray.100",
                borderRadius: "5px",
                borderWidth: "1px",
                borderColor: "gray.100",
                color: "black",
                _hover: {
                    bg: "white",
                    borderColor: "accent_yellow.500",
                    _placeholder: {
                        color: "gray.300"
                    }
                },
                _focus: {
                    bg: "white",
                    borderColor: "accent_yellow.600",
                }
            },
        },
        Select: {
            baseStyle: {
                option: {
                    _placeholder: {
                        opacity: 1,
                        color: 'gray.400',
                    },
                    height: "42px",
                    bg: "gray.100",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    borderColor: "gray.100",
                    color: "black",
                    _hover: {
                        bg: "white",
                        borderColor: "accent_yellow.500",
                        _placeholder: {
                            color: "gray.300"
                        }
                    },
                    _focus: {
                        bg: "white",
                        borderColor: "accent_yellow.600",
                    }
                },
            }
        },

        FormLabel: {
            baseStyle: {
                color: "black",
                fontWeight: "medium",
                fontSize: "16px",
                letterSpacing: -1
            }
        },
        Text: {
            baseStyle: {
            },
            sizes: {
                sm: {
                    fontSize: "14px",
                },
                md: {}
            }
        }

    }
})

export default Theme