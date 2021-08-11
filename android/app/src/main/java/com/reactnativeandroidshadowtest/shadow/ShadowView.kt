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
    //    app:shadow_cast_only_background="true"
//    app:shadow_color="#808"
//    app:shadow_downscale="1"
//    app:shadow_radius="8"
//    app:shadow_with_color="true"
//    app:shadow_with_content="true"
//    app:shadow_with_css_scale="true"
//    app:shadow_with_dpi_scale="true"
//    app:shadow_x_shift="1dp"
//    app:shadow_y_shift="2dp">
    init {
        shadow_color = Color.parseColor("#ffa8a8");
        shadow_with_color = true
        shadow_with_content = true
        shadow_with_css_scale = true
        shadow_with_dpi_scale = true
        shadow_x_shift = 3.0f
        shadow_y_shift = 3.0f
        shadow_radius = 5.0f
    }

}