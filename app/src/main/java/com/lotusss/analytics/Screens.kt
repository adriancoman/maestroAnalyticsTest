package com.lotusss.analytics

sealed class Screens(val route: String){
    data object LoginScreen : Screens("Login")
    data object HelloScreen : Screens("Hello")
}