#include <sys/stat.h>
#include <sys/types.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define IN 0
#define OUT 1
#define LOW 0
#define HIGH 1
#define PIN 20
#define POUT2 21
#define POUT 17
#define VALUE_MAX 40

static int GPIOExport(int pin) // 같음
{

#define BUFFER_MAX 3

    char buffer[BUFFER_MAX];
    ssize_t bytes_written;
    int fd;

    fd = open("/sys/class/gpio/export", O_WRONLY);
    if (-1 == fd)
    {
        fprintf(stderr, "Failed to open export for writing!\n");
        return (-1);
    }

    bytes_written = snprintf(buffer, BUFFER_MAX, "%d", pin);
    write(fd, buffer, bytes_written);
    close(fd);
    return (0);
}

static int GPIOUnexport(int pin) // 같음
{
    char buffer[BUFFER_MAX];
    ssize_t bytes_written;
    int fd;

    fd = open("/sys/class/gpio/unexport", O_WRONLY);
    if (-1 == fd)
    {
        fprintf(stderr, "Failed to open unexport for writing!\n");
        return (-1);
    }

    bytes_written = snprintf(buffer, BUFFER_MAX, "%d", pin);
    write(fd, buffer, bytes_written);
    close(fd);
    return (0);
}

static int GPIODirection(int pin, int dir) // 같음
{
    static const char s_directions_str[] = "in\0out";

#define DIRECTION_MAX 35

    char path[DIRECTION_MAX] = "/sys/class/gpio/gpio%d/direction";
    int fd;

    snprintf(path, DIRECTION_MAX, "/sys/class/gpio/gpio%d/direction", pin);

    fd = open(path, O_WRONLY);

    if (-1 == fd)
    {
        fprintf(stderr, "Failed to open gpio direction for writing!\n");
        return (-1);
    }

    if (-1 == write(fd, &s_directions_str[IN == dir ? 0 : 3], IN == dir ? 2 : 3))
    {
        fprintf(stderr, "Failed to set direction!\n");
        close(fd);
        return (-1);
    }

    close(fd);
    return (0);
}

static int GPIORead(int pin)
{
    char path[VALUE_MAX];
    char value_str[3];
    int fd;

    snprintf(path, VALUE_MAX, "/sys/class/gpio/gpio%d/value", pin);
    fd = open(path, O_RDONLY);
    if (-1 == fd)
    {
        fprintf(stderr, "Failed to open gpio value for reading!\n");
        return (-1);
    }
    if (-1 == read(fd, value_str, 3))
    {
        fprintf(stderr, "Failed to read value!\n");
        close(fd);
        return (-1);
    }

    close(fd);

    return (atoi(value_str));
}

static int GPIOWrite(int pin, int value) // 같음
{
    static const char s_values_str[] = "01";

    char path[VALUE_MAX];
    int fd;

    snprintf(path, VALUE_MAX, "/sys/class/gpio/gpio%d/value", pin);
    fd = open(path, O_WRONLY);
    if (-1 == fd)
    {
        fprintf(stderr, "Failed to open gpio value for writing!\n");
        return (-1);
    }
    if (1 != write(fd, &s_values_str[LOW == value ? 0 : 1], 1))
    {
        fprintf(stderr, "Failed to write value!\n");
        close(fd);
        return (-1);
    }

    close(fd);
    return (0);
}

int main(int argc, char *argv[])
{
    int repeat = 100; // 100번 버튼(10초) check loop <- 버튼 꾹누르면 계속 0
    int state = 100;  // toggle을 위한 state
    int prev_state = 1;
    int light = 1;

    if (-1 == GPIOExport(POUT2) || -1 == GPIOExport(PIN))
        return (1);

    if (-1 == GPIOExport(POUT)) // add
    {
        return 1;
    }
    if (-1 == GPIODirection(POUT2, OUT) || -1 == GPIODirection(PIN, IN))
        return (2);

    if (-1 == GPIODirection(POUT, OUT)) // add
    {
        return 2;
    }

    do
    {
        if (-1 == GPIOWrite(POUT2, 1))
            return (3);

        if (GPIORead(PIN) == 0) // press
        {
            if (-1 == GPIOWrite(POUT, light)) // turn on and off
            {
                return 3;
            }
            // usleep(300 * 1000); // 0.3s because of usleep func -> micro
            light = state % 2;
            state--;
        }

        printf("GPIORead : %d from pin %d\n", GPIORead(PIN), PIN); // read whether press or not press
        usleep(100000);                                            // writeTest에 테스트한 결과, 시간이 느려짐을 알 수 있음.
    } while (repeat--);

    if (-1 == GPIOUnexport(POUT2) || -1 == GPIOUnexport(PIN))
        return (4);
    if (-1 == GPIOUnexport(POUT))
    {
        return 4;
    }
    return (0);
}