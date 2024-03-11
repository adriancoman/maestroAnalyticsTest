package com.lotusss.analytics.repository

interface AnalyticsRepository {
    fun logEvent(event: String, data: String)
}