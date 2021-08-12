package com.reactnativeandroidshadowtest.shadow

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.reactnativeandroidshadowtest.R

/**
 * Created by Dmytro Portenko on 10.08.2021.
 */
class ShadowView(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = R.attr.shadowLayoutStyle,
    defStyleRes: Int = 0
) :
    ShadowLayout(context, attrs, defStyleAttr, defStyleRes) {
    init {
        shadow_color = Color.parseColor("#ffa8a8");
        shadow_with_color = true
        shadow_with_content = true
        shadow_with_css_scale = true
        shadow_with_dpi_scale = true
        shadow_cast_only_background = true
        shadow_x_shift = 3.0f
        shadow_y_shift = 3.0f
        shadow_radius = 5.0f
        shadow_downscale = 1f
    }

    fun setShadowProps(shadowProps: ReadableMap?) {
        if (shadowProps != null) {
            var shadowOffset = shadowProps.getMap("shadowOffset")
            if (shadowOffset != null) {
                if (shadowOffset.hasKey("width")) {
                    var shadowX = shadowOffset.getDouble("width").toFloat()
                    shadow_x_shift = shadowX
                }

                if (shadowOffset.hasKey("height")) {
                    var shadowY = shadowOffset.getDouble("height").toFloat()
                    shadow_y_shift = shadowY
                }
            }
            if (shadowProps.hasKey("shadowRadius")) {
                var shadowRadius = shadowProps.getDouble("shadowRadius").toFloat()
                shadow_radius = shadowRadius
            }

            if (shadowProps.hasKey("shadowColor")) {
                var shadowColor = shadowProps.getInt("shadowColor")
                shadow_color = shadowColor
                shadow_with_color = false
            }

            Log.d("ShadowView", shadowProps.toString())
        }
    }
}