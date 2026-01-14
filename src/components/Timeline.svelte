<script>
	import { Info } from 'lucide-svelte';
</script>

<!-- Open the modal using ID.showModal() method -->
<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Examen Básico - Vie. 30 Enero</h3>
		<div class="py-4 space-y-4">
			<div role="alert" class="alert alert-info">
				<span>El examen no tiene costo adicional</span>
			</div>
			<ul class="mt-4 text-sm">
				<li><b>Horario</b>: Por definir.</li>
				<li><b>Lugar</b>: Bóveda Secreta</li>
				<li><b>Duración aprox</b>: 4-5 horas</li>
			</ul>
			<div class="text-sm">
				Para rendirlo sólo deben contar con un plan activo y haber cursado 6 meses continuos
				entrenando en la bóveda secreta. <br/><br/>La vestimenta es la misma q se recomienda en los
				entrenamientos, ropa cómoda, polera con mangas y llevar cambio de polera, se recomienda
				tambien llevar toalla personal, y calzado apropiado o derechamente no con el que llegan al
				recinto. <br/><br/> El examen mide las habilidades cognitivas, físicas y comunicación que se han
				adquirido en los entrenamientos. Se mide si un alumno pasa o no si sus bases son firmes y
				está capacitado para recibir más información.
			</div>
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Cerrar</button>
			</form>
		</div>
	</div>
</dialog>

<ul class="timeline timeline-vertical lg:timeline-horizontal mx-auto">
	<li>
		<hr class="bg-indigo-800" />
		<div class="timeline-start">Vie. 30 Enero</div>
		<div class="timeline-middle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<button class="timeline-end timeline-box btn" onclick="my_modal_1.showModal()"
			><b>Examen Básico</b> <Info /></button
		>
		<hr />
	</li>
	<li>
		<hr />
		<div class="timeline-start">Sáb. 07 Febrero</div>
		<div class="timeline-middle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="timeline-end timeline-box"><b>Examen Intermedio</b></div>
		<hr />
	</li>
	<li>
		<hr />
		<div class="timeline-start">Vie. 13 Febrero</div>
		<div class="timeline-middle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="timeline-end timeline-box"><b>Crudo</b></div>
		<hr />
	</li>
</ul>
