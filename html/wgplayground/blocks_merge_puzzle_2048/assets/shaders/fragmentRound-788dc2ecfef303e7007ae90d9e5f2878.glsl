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

uniform vec2 u_centerPoint;
uniform float u_radius;
uniform float u_angle;

void main()
{
    vec4 color = texture2D(u_texture, v_texCoords);

    if (u_radius > 0.0)
    {
        float dist = distance(vVertex.xy, u_centerPoint);

        if (dist > u_radius)
        {
            color.g = color.r;
            color.b = color.r;
        }
    }

    if (u_angle > 0.0)
    {
        vec2 vec = normalize(vVertex.xy - u_centerPoint);

        float a = atan(vec.x, vec.y) * ((1.0 / 3.1415926538) * 180.0);

        if (a < 0.0)
            a += 360.0;

        if (u_angle > a)
        {
            color.g = color.r;
            color.b = color.r;
        }
    }

    if (color.a > 0.0)
    {
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
    }

    gl_FragColor = color * v_color;
}
