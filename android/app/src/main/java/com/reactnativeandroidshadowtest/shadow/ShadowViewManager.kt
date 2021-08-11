package com.reactnativeandroidshadowtest.shadow

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewGroupManager


class ShadowViewManager(
    reactContext: ReactApplicationContext
): ViewGroupManager<ShadowView>() {

    override fun getName(): String {
        return "ShadowView"
    }

    override fun createViewInstance(context: ThemedReactContext): ShadowView {
        return ShadowView(context)
    }

}