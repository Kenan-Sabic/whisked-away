function trapezoidal_double(f, a, b, c, d, m, n)

    h = (b - a) / n
    j_1 = 0
    j_2 = 0
  
    for i = 0:n
        x = a + i * h
        hx = (d(x) - c(x)) / m
        k_1 = f(x, c(x)) + f(x, d(x))
        k_2 = 0
    for j = 1:m-1
        y = c(x) + j * hx
        Q = f(x, y)
        k_2 = k_2 + Q
    end
  
    L = ((k_1 + 2 * k_2) * hx) / 2
    if (i == 0 || i == n)
         j_1 = j_1 + L
    else
        j_2 = j_2 + L
    end
    end
    j = h * (j_1 + 2 * j_2) / 2
    return j
end


p = (x, y) -> x^2 + y^2
c = x -> 0
d = x -> 1

trapezoidal_double(p, 0, 1, c, d, 100, 100)