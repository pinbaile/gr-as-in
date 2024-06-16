import React from 'react'

const getTnmtsBySeries = (tournaments: Tournament[]) =>
  tournaments.reduce(
    (
      tnmts: {
        tiltedTokenTnmts: Tournament[]
        fibbersTnmts: Tournament[]
        other: Tournament[]
      },
      t
    ) => {
      if (t.name.includes('Tilted Token')) {
        tnmts.tiltedTokenTnmts.push(t)
      } else if (t.name.includes('Flip-off')) {
        tnmts.fibbersTnmts.push(t)
      }
      return tnmts
    },
    { tiltedTokenTnmts: [], fibbersTnmts: [], other: [] }
  )

const byStartDate = (a: Tournament, b: Tournament) =>
  a.startLocal < b.startLocal ? -1 : a.startLocal > b.startLocal ? 1 : 0

const TournamentListItem = ({ tournament }: { tournament: Tournament }) => {
  return (
    <li className="list-item">
      <span className="hidden sm:inline-block">* &nbsp;</span>
      <a
        className="underline underline-offset-2"
        href={`https://app.matchplay.events/tournaments/${tournament.tournamentId}`}
      >
        {new Intl.DateTimeFormat('en-IE', {
          weekday: 'short',
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(new Date(tournament.startLocal))}
      </a>
    </li>
  )
}
export const TournamentList = ({
  tournaments
}: {
  tournaments: Tournament[]
}) => {
  const { fibbersTnmts, other } = getTnmtsBySeries(tournaments)
  return (
    <div className=" col-span-2">
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Tournaments
      </h2>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-2">
        FLIP-OFF @ FIBBERS
        <br />
        <span className="text-lg">Every other Wednesday - 7PM</span>
        <br />
      </h3>
      <p className="mb-2 font-normal leading-6 not-italic text-md">
        Group knockout 3 strike tournament held every other week at...
        <br />
        <span className="font-semibold">Fibber Magees: </span>
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48670e86ef8eb32f:0xa9e461e298020e37?sa=X&amp;ved=1t:8290&amp;ictx=111"
          className="cursor-pointer underline"
        >
          <span>80-81 Parnell St, Rotunda, Dublin 1, D01 CK74</span>
        </a>
        <br />
        <span className="font-semibold block mt-2">Next meets: </span>
      </p>
      <ul className="font-source space-y-2 text-xs sm:text-sm">
        {fibbersTnmts.sort(byStartDate).map((t) => {
          return <TournamentListItem tournament={t} key={t.name} />
        })}
      </ul>
      {other.length > 0 && (
        <>
          <h3 className="text-xs font-source font-extrabold italic mb-2">
            Other
          </h3>
          <ul className="font-source space-y-2 text-xs sm:text-sm">
            {other.sort(byStartDate).map((t) => {
              return <TournamentListItem tournament={t} key={t.name} />
            })}
          </ul>
        </>
      )}
    </div>
  )
}
