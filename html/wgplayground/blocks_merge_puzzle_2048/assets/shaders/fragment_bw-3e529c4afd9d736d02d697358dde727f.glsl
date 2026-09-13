#ifdef GL_ES
    precision mediump float;
#endif

varying vec4 v_color;
varying vec2 v_texCoords;
uniform sampler2D u_texture;
varying vec4 vVertex;
uniform float u_upFade;
uniform float u_dwnFade;
uniform float u_lenFade;

void main() {
    vec4 color = texture2D(u_texture, v_texCoords);

    if (vVertex.y > u_upFade + u_lenFade)
       color.a = 0.0;
    else if (vVertex.y < u_dwnFade - u_lenFade)
              color.a = 0.0;
    else if (vVertex.y > u_upFade)
    {
       float da = color.a / u_lenFade;
       float dst = vVertex.y - u_upFade;
       color.a -= dst * da;
    }
    else if (vVertex.y < u_dwnFade)
    {
       float da = color.a / u_lenFade;
       float dst = u_dwnFade - vVertex.y;
       color.a -= dst * da;
    }

    color.g = color.r;
    color.b = color.r;

     gl_FragColor = color * v_color;//vec4(grayscale, 1.0);
}
