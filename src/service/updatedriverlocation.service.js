const { client } = require('../config/redis.config')


async function updatelocationofdriver(request, response) {
    try {
        const updatedriver = await client.geoAdd('driver:online', {
            longitude: request.body.longitude,
            latitude: request.body.latitude,
            member: request.userId
        })
        console.log("the updateddriver", updatedriver)
        return response.status(200).json({
            data: updatedriver,
            suceess: "True"
        })
    } catch (error) {
        console.log(error)
        return response.status(400).json({
            data: {},
            suceess: "False"
        })
    }
}
async function findnearbydriver(latitude,longitude) {
    try {
        // const rawDrivers = await client.sendCommand([
        //     'GEOSEARCH',
        //     'driver:online',
        //     'FROMLONLAT', longitude.toString(), latitude.toString(),
        //     'BYRADIUS', '5', 'km',
        //     'WITHCOORD'
        // ]);
        // const drivers = rawDrivers.map(d => ({
        //     driverId: d[0],
        //     longitude: parseFloat(d[1][0]),
        //     latitude: parseFloat(d[1][1])
        // }));
        const drivers = await client.geoSearch('driver:online', {
            longitude: longitude,
            latitude: latitude,
        }, {
            radius: 5, unit: 'km'
        }, { WITHDIST: true, WITHCOORD: true })

        console.log("the nearbydrivers", drivers)

        return drivers;
    } catch (error) {
        console.log(error)

    }


}


module.exports = { updatelocationofdriver, findnearbydriver }


