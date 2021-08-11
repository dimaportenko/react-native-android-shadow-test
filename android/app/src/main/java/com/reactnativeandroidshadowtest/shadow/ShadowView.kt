package com.reactnativeandroidshadowtest.shadow

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
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

}